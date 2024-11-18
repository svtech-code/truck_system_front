import * as Yup from "yup";
import { REGEX_numberString } from "../utils/regularExpressions";

const anioActual = new Date().getFullYear();

const vehicleValidation = () => {
  return Yup.object().shape({
    patente_completa: Yup.string()
      .trim()
      .min(8, "Agregar patente completa con guión!")
      .max(8, "Agregar patente completa con guión!")
      .required("Modelo requerido")
      .matches(
        REGEX_numberString,
        "Solo se admiten letras, numeros y espacios !"
      ),
    anio: Yup.number()
      .positive()
      .integer()
      .required("Año requerido")
      .min(1950, "El año debe ser mayor a 1950")
      .max(anioActual, `El año debe ser menor o igual a ${anioActual}`),
    cantidad_kilos: Yup.number()
      .positive()
      .integer()
      .min(1000, "El tonelaje debe ser mayor a 1000")
      .required("Tonelaje requerido !"),
    // desc_tipo_vehiculo: Yup.string().required("Seleccionar tipo !"),
    // desc_modelo: Yup.string().required("Seleccionar modelo !"),
    desc_vehiculo: Yup.string()
      .required("Descripción obligatoria")
      .matches(
        REGEX_numberString,
        "Solo se admiten letras, numeros y espacios !"
      ),
    // idTransportista: Yup.string().required("Seleccionar transportista !"),
    fecha_vigencia_seguro: Yup.date().required(
      "Seleccionar fecha vencimiento seguro"
    ),
    fecha_vigencia_revision: Yup.date().required(
      "Seleccionar fecha vencimiento revisión"
    ),
    // desc_chofer: Yup.string().required("Seleccionar chofer !"),
  });
};

export default vehicleValidation;
