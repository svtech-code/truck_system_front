import * as Yup from "yup";
import {
  REGEX_email,
  REGEX_number,
  REGEX_numberString,
  REGEX_run,
  REGEX_String,
  REGEX_userName,
} from "../utils/regularExpressions";

const driverValidation = () => {
  return Yup.object().shape({
    run_usuario: Yup.string()
      .trim()
      .required("El rut es requerido !")
      .matches(REGEX_run, "Formato no válido !"),
    nombres_usuario: Yup.string()
      .trim()
      .required("Nombre requerido !")
      .matches(REGEX_String, "Solo se admiten letras y espacios !"),
    apellido_paterno: Yup.string()
      .trim()
      .required("Apellido paterno requerido !")
      .matches(REGEX_String, "Solo se admiten letras y espacios !"),
    apellido_materno: Yup.string()
      .trim()
      .required("Apellido materno requerido !")
      .matches(REGEX_String, "Solo se admiten letras y espacios !"),
    direccion_usuario: Yup.string()
      .trim()
      .required("La dirección es requerida")
      .matches(
        REGEX_numberString,
        "Solo se admiten letras, números y espacios !"
      ),
    telefono1: Yup.string()
      .trim()
      .required("Teléfono requerido !")
      .matches(REGEX_number, "No superar los 11 digitos !"),
    telefono2: Yup.string()
      .trim()
      .matches(REGEX_number, "No superar los 11 digitos !"),
    email: Yup.string()
      .email("El email no es válido !")
      .trim()
      .required("El email es requerido !")
      .matches(REGEX_email, "El email no es válido !"),
    username: Yup.string()
      .trim()
      .min(6, "El nombre de usuario debe contener al menos 6 carécteres !")
      .max(16, "El nombre de usuario no debe contener más de 16 carácteres !")
      .required("Nombre de usuario requerido !")
      .matches(
        REGEX_userName,
        "El nombre de usuario solo puede contener letras, números y los siguientes carácteres especiales; '@ _'"
      ),
  });
};

export default driverValidation;
