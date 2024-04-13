import * as Yup from "yup";

const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const loginValidation = () => {
  return Yup.object().shape({
    email: Yup.string()
      .trim()
      .email("Email no válido !")
      .required("Email requerido !"),
    password: Yup.string()
      .min(5, "La constraseña debe contener al menos 6 carécteres !")
      .max(12, "La constraseña debe contener más de 12 carácteres !")
      .required("Contraseña requerida !")
      .matches(
        PASSWORD_REGEX,
        "La contraseña debe tener al menos 6 carácteres, una mayúscula, una minúscula y alguno de los siguientes carácteres especiales; '! @ # $ %' !"
      ),
  });
};

export default loginValidation;
