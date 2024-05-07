import useAuth from "../../hooks/useAuth";
import useAuthentication from "../../hooks/useAuthentication";

import loginValidation from "../../validations/loginValidation";

import { Formik } from "formik";
import { Button, Input, button } from "@nextui-org/react";
import { FaUserAlt, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const FormLogin = () => {
  const { login } = useAuth();
  const { onSubmit } = useAuthentication({ login });

  // esquema de validación
  const loginValidationSchema = loginValidation();

  // manejo de la visibilidad de la contraseña
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible(!visible);

  return (
    <article className="relative flex flex-col items-center justify-center sm:h-[70%] w-full gap-6 z-10">
      <h2 className="font-bold text-3xl sm:text-4xl text-primary-color text-center mt-20 sm:py-10 sm:tracking-wider transition-all duration-300">
        INICIO DE SESIÓN
      </h2>

      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={loginValidationSchema}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          errors,
          // touched,
          handleBlur,
          isSubmitting,
          setFieldValue,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="relative flex flex-col w-full justify-center items-center gap-6"
          >
            <div className="relative flex flex-col w-[70%] md:w-[80%] lg:w-[55%] max-w-[35rem] gap-8 my-10 transition-all duration-300">
              {/* input correo */}
              <Input
                color={
                  values.username !== "" && errors.username
                    ? "danger"
                    : "success"
                }
                // isRequired={true}
                variant="bordered"
                type="text"
                name="username"
                id="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                onClear={() => setFieldValue("username", "")}
                size="lg"
                label="Cuenta de usuario"
                labelPlacement="outside"
                placeholder="Ingresar username"
                isInvalid={errors.username && values.username !== ""}
                errorMessage={values.username !== "" && errors.username}
                startContent={
                  <FaUserAlt
                    size={25}
                    className={
                      values.username !== "" && errors.username
                        ? "text-red-500"
                        : "text-gray-400"
                    }
                  />
                }
                classNames={{
                  label: ["text-lg", "pl-4", "text-primary-color"],
                  input: [],
                  innerWrapper: ["gap-2", "px-2"],
                  inputWrapper: [],
                }}
              />

              {/* input contraseña */}
              <Input
                color={
                  values.password !== "" && errors.password
                    ? "danger"
                    : "success"
                }
                // isRequired={true}
                variant="bordered"
                type={visible ? "text" : "password"}
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                size="lg"
                label="Contraseña"
                labelPlacement="outside"
                placeholder="Ingresar password"
                isInvalid={errors.password && values.password !== ""}
                errorMessage={values.password !== "" && errors.password}
                startContent={
                  <FaLock
                    size={22}
                    className={
                      values.password !== "" && errors.password
                        ? "text-red-500"
                        : "text-gray-400"
                    }
                  />
                }
                endContent={
                  <button
                    type="button"
                    onClick={toggleVisible}
                    className={`cursor-pointer hover:scale-110 transition-all duration-300 
                      ${
                        values.password !== "" && errors.password
                          ? "text-red-500 hover:text-red-700"
                          : "text-gray-400 hover:text-gray-600"
                      }`}
                  >
                    {visible ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
                  </button>
                }
                classNames={{
                  label: ["text-lg", "pl-4", "text-primary-color"],
                  input: [],
                  innerWrapper: ["gap-2", "px-2"],
                  inputWrapper: [],
                }}
              />
            </div>

            <Button
              size="lg"
              className="relative w-[55%] max-w-[35rem]
              text-white font-bold text-xl
                bg-gradient-to-r from-[#00597B] to-[#00A3E1]
                hover:shadow-md hover:shadow-[#00597B]"
              type="submit"
              disabled={isSubmitting}
            >
              Ingresar
            </Button>
          </form>
        )}
      </Formik>
    </article>
  );
};

export default FormLogin;
