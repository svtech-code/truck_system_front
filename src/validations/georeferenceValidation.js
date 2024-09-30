import * as Yup from "yup";
import { REGEX_numberString, REGEX_String } from "../utils/regularExpressions";

const georeferenceValidation = () => {
  return Yup.object().shape({
    direccion: Yup.string()
      .trim()
      .required("Descripción requerida")
      .matches(REGEX_String, "Solo de admiten letras y espacios !"),
    referencia_direccion: Yup.string()
      .trim()
      .required("Descripción requerida")
      .matches(REGEX_String, "Solo de admiten letras y espacios !"),
    latitud: Yup.number().required("Latitud requerida"),
    longitud: Yup.number().required("Longitud requerida"),
    desc_georeferencia: Yup.string()
      .trim()
      .required("Descripción requerida")
      .matches(REGEX_String, "Solo de admiten letras y espacios !"),
    cod_comuna: Yup.string().trim().required("Comuna requerida"),
    numero: Yup.string()
      .trim()
      .required("Descripción requerida")
      .matches(REGEX_numberString, "No se admiten caracteres especiales"),
  });
};

export default georeferenceValidation;
