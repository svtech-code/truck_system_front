import * as Yup from "yup";
import {
  REGEX_email,
  REGEX_number,
  REGEX_numberString,
  REGEX_run,
  REGEX_String,
} from "../utils/regularExpressions";

const taxpayerValidation = () => {
  return Yup.object().shape({
    run_contribuyente: Yup.string()
      .trim()
      .required("El rut es requerido !")
      .matches(REGEX_run, "Formato no válido !"),
    nombre_contribuyente: Yup.string()
      .trim()
      .required("Nombre requerido !")
      .matches(REGEX_String, "Solo se admiten letras y espacios !"),
    apellido_paterno_contribuyente: Yup.string()
      .trim()
      .required("Apellido paterno requerido !")
      .matches(REGEX_String, "Solo se admiten letras y espacios !"),
    apellido_materno_contribuyente: Yup.string()
      .trim()
      .required("Apellido materno requerido !")
      .matches(REGEX_String, "Solo se admiten letras y espacios !"),
    email: Yup.string()
      .email("El email no es válido !")
      .trim()
      .required("El email es requerido !")
      .matches(REGEX_email, "El email no es válido !"),
    telefono1_contribuyente: Yup.string()
      .trim()
      .required("Teléfono requerido !")
      .matches(REGEX_number, "Formato inválido, revisar !"),
    telefono2_contribuyente: Yup.string()
      .trim()
      .matches(REGEX_number, "Formato inválido, revisar !"),
    direccion_contribuyente: Yup.string()
      .trim()
      .required("La dirección es requerida")
      .matches(
        REGEX_numberString,
        "Solo se admiten letras, números y espacios !"
      ),
    direccion_numero: Yup.string()
      .trim()
      .matches(REGEX_numberString, "No se admiten caracteres especiales !"),
    cod_comuna: Yup.string().required("La comuna es requerida !"),
    transportista: Yup.boolean(),
    desc_contribuyente: Yup.string()
      .trim()
      .matches(
        REGEX_numberString,
        "El texto no debe tener caracteres especiales !"
      ),
    // estado_contribuyente: Yup.number,
    // georeferencias: Yup.array(Yup.number()),
  });
};

export default taxpayerValidation;
