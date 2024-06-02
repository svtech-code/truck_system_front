import * as Yup from "yup";
import { REGEX_password, REGEX_userName } from "../utils/regularExpressions";

const loginValidation = () => {
  return Yup.object().shape({
    username: Yup.string()
      .trim()
      .min(6, "El nombre de usuario debe contener al menos 6 carécteres !")
      .max(16, "El nombre de usuario no debe contener más de 16 carácteres !")
      .required("Nombre de usuario requerido !")
      .matches(
        REGEX_userName,
        "El nombre de usuario solo puede contener letras, números y los siguientes carácteres especiales; '@ _'"
      ),
    password: Yup.string()
      .min(6, "La constraseña debe contener al menos 6 carécteres !")
      .max(12, "La constraseña no debe contener más de 12 carácteres !")
      .required("Contraseña requerida !")
      .matches(
        REGEX_password,
        "La contraseña debe tener al menos 6 carácteres, una mayúscula, una minúscula y alguno de los siguientes carácteres especiales; '! @ # $ %' !"
      ),
  });
};

export default loginValidation;
