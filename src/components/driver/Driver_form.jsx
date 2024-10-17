import { Input } from "@nextui-org/react";
import { FaUserTie } from "react-icons/fa";
import { formatRut } from "../../utils/functions";

const Driver_form = ({
  values,
  setFieldValue,
  handleBlur,
  handleChange,
  touched,
  errors,
  inputRef,
}) => {
  return (
    <>
      {/* rut del chofer */}
      <div className="flex gap-x-4 justify-between">
        {/* rut */}
        <Input
          className="w-1/3"
          color={
            touched.run_usuario && errors.run_usuario ? "danger" : "primary"
          }
          name="run_usuario"
          type="text"
          label="Rut Chofer"
          labelPlacement="outside"
          variant="faded"
          value={values.run_usuario ? values.run_usuario.toUpperCase() : ""}
          ref={inputRef}
          isRequired={true}
          onChange={(e) =>
            formatRut(e.target.value, setFieldValue, "run_usuario")
          }
          onBlur={handleBlur}
          isInvalid={touched.run_usuario && errors.run_usuario}
          errorMessage={touched.run_usuario && errors.run_usuario}
        />

        <div className="flex justify-center items-center pr-10">
          <FaUserTie size={80} />
        </div>
      </div>

      {/* nombres y apellidos */}
      <div className="flex gap-x-4">
        {/* nombre */}
        <Input
          className="grow min-w-[10rem]"
          color={
            touched.nombres_usuario && errors.nombres_usuario
              ? "danger"
              : "primary"
          }
          name="nombres_usuario"
          type="text"
          label="Nombres Chofer"
          labelPlacement="outside"
          variant="faded"
          value={
            values.nombres_usuario ? values.nombres_usuario.toUpperCase() : ""
          }
          isRequired={true}
          onChange={(e) =>
            setFieldValue("nombres_usuario", e.target.value.toUpperCase())
          }
          onBlur={handleBlur}
          isInvalid={touched.nombres_usuario && errors.nombres_usuario}
          errorMessage={touched.nombres_usuario && errors.nombres_usuario}
        />

        {/* apellido paterno */}
        <Input
          className="w-[20rem]"
          color={
            touched.apellido_paterno && errors.apellido_paterno
              ? "danger"
              : "primary"
          }
          name="apellido_paterno"
          type="text"
          label="Apellido paterno"
          labelPlacement="outside"
          variant="faded"
          value={
            values.apellido_paterno ? values.apellido_paterno.toUpperCase() : ""
          }
          isRequired={true}
          onChange={(e) =>
            setFieldValue("apellido_paterno", e.target.value.toUpperCase())
          }
          onBlur={handleBlur}
          isInvalid={touched.apellido_paterno && errors.apellido_paterno}
          errorMessage={touched.apellido_paterno && errors.apellido_paterno}
        />

        {/* apellido paterno */}
        <Input
          className="w-[20rem]"
          color={
            touched.apellido_materno && errors.apellido_materno
              ? "danger"
              : "primary"
          }
          name="apellido_materno"
          type="text"
          label="Apellido materno"
          labelPlacement="outside"
          variant="faded"
          value={
            values.apellido_materno ? values.apellido_materno.toUpperCase() : ""
          }
          isRequired={true}
          onChange={(e) =>
            setFieldValue("apellido_materno", e.target.value.toUpperCase())
          }
          onBlur={handleBlur}
          isInvalid={touched.apellido_materno && errors.apellido_materno}
          errorMessage={touched.apellido_materno && errors.apellido_materno}
        />
      </div>

      {/* correo y numeros telefónicos */}
      <div className="flex gap-x-4">
        {/* correo */}
        <Input
          className="grow min-w-[10rem]"
          color={touched.email && errors.email ? "danger" : "primary"}
          name="email"
          type="text"
          label="E-mail chofer"
          labelPlacement="outside"
          variant="faded"
          value={values.email ? values.email.toLowerCase() : ""}
          isRequired={true}
          onChange={(e) => setFieldValue("email", e.target.value.toLowerCase())}
          onBlur={handleBlur}
          isInvalid={touched.email && errors.email}
          errorMessage={touched.email && errors.email}
        />

        {/* teléfono 1 */}
        <Input
          className="w-[20rem]"
          color={touched.telefono1 && errors.telefono1 ? "danger" : "primary"}
          name="telefono1"
          type="text"
          label="Teléfono 1"
          labelPlacement="outside"
          variant="faded"
          value={values.telefono1 ? values.telefono1.toUpperCase() : ""}
          isRequired={true}
          onChange={(e) =>
            setFieldValue("telefono1", e.target.value.toUpperCase())
          }
          onBlur={handleBlur}
          isInvalid={touched.telefono1 && errors.telefono1}
          errorMessage={touched.telefono1 && errors.telefono1}
        />

        {/* teléfono 2 */}
        <Input
          className="w-[20rem]"
          color={touched.telefono2 && errors.telefono2 ? "danger" : "primary"}
          name="telefono2"
          type="text"
          label="Teléfono 2"
          labelPlacement="outside"
          variant="faded"
          value={values.telefono2 ? values.telefono2.toUpperCase() : ""}
          isRequired={false}
          onChange={(e) =>
            setFieldValue("telefono2", e.target.value.toUpperCase())
          }
          onBlur={handleBlur}
          isInvalid={touched.telefono2 && errors.telefono2}
          errorMessage={touched.telefono2 && errors.telefono2}
        />
      </div>

      {/* nombre de usuario y contraseña */}
      <div className="flex gap-x-4">
        {/* user name */}
        <Input
          className="w-[20rem]"
          color={touched.username && errors.username ? "danger" : "primary"}
          name="username"
          type="text"
          label="Nombre de usuario de la cuenta"
          labelPlacement="outside"
          variant="faded"
          value={values.username ? values.username.toUpperCase() : ""}
          isRequired={true}
          onChange={(e) =>
            setFieldValue("username", e.target.value.toUpperCase())
          }
          onBlur={handleBlur}
          isInvalid={touched.username && errors.username}
          errorMessage={touched.username && errors.username}
        />

        {/* password */}
        <Input
          className="w-[20rem]"
          color={touched.contrasena && errors.contrasena ? "danger" : "primary"}
          name="contrasena"
          type="text"
          label="Contraseña"
          labelPlacement="outside"
          variant="faded"
          value={values.contrasena ? values.contrasena.toUpperCase() : ""}
          isRequired={true}
          onChange={(e) =>
            setFieldValue("contrasena", e.target.value.toUpperCase())
          }
          onBlur={handleBlur}
          isInvalid={touched.contrasena && errors.contrasena}
          errorMessage={touched.contrasena && errors.contrasena}
        />
      </div>

      {/* dirección */}
      <div className="flex gap-x-4">
        {/* dirección */}
        <Input
          className="w-full"
          color={
            touched.direccion_usuario && errors.direccion_usuario
              ? "danger"
              : "primary"
          }
          name="direccion_usuario"
          type="text"
          label="Dirección chofer"
          labelPlacement="outside"
          variant="faded"
          value={
            values.direccion_usuario
              ? values.direccion_usuario.toUpperCase()
              : ""
          }
          isRequired={true}
          onChange={(e) =>
            setFieldValue("direccion_usuario", e.target.value.toUpperCase())
          }
          onBlur={handleBlur}
          isInvalid={touched.direccion_usuario && errors.direccion_usuario}
          errorMessage={touched.direccion_usuario && errors.direccion_usuario}
        />
      </div>
    </>
  );
};

export default Driver_form;
