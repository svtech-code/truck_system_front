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
    es_empresa: Yup.boolean(),

    apellido_paterno_contribuyente: Yup.string()
      .trim()
      .matches(REGEX_String, "Solo se admiten letras y espacios !")
      .when("es_empresa", (es_empresa, schema) => {
        if (!es_empresa[0])
          return schema.required("Apellido paterno requerido !");
        return schema;
      }),

    apellido_materno_contribuyente: Yup.string()
      .trim()
      .matches(REGEX_String, "Solo se admiten letras y espacios !")
      .when("es_empresa", (es_empresa, schema) => {
        if (!es_empresa[0])
          return schema.required("Apellido materno requerido !");
        return schema;
      }),

    email: Yup.string()
      .email("El email no es válido !")
      .trim()
      .required("El email es requerido !")
      .matches(REGEX_email, "El email no es válido !"),
    telefono1_contribuyente: Yup.string()
      .trim()
      .required("Teléfono requerido !")
      .matches(REGEX_number, "No superar los 11 digitos !"),
    telefono2_contribuyente: Yup.string()
      .trim()
      .matches(REGEX_number, "No superar los 11 digitos !"),
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
    cod_comuna: Yup.string()
      .trim()
      .required("La comuna es requerida !"),
    transportista: Yup.boolean(),
    desc_contribuyente: Yup.string()
      .trim()
      .matches(
        REGEX_numberString,
        "El texto no debe tener caracteres especiales !"
      ),
  });
};

export default taxpayerValidation;
