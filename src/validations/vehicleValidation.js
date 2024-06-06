import * as Yup from "yup";
import { REGEX_numberString } from "../utils/regularExpressions";

const añoActual = new Date().getFullYear();

const vehicleValidation = () => {
  return Yup.object().shape({
    patente: Yup.string()
      .trim()
      .min(8, "Agregar patente completa con guión!")
      .max(8, "Agregar patente completa con guión!")
      .required("Modelo requerido")
      .matches(
        REGEX_numberString,
        "Solo se admiten letras, numeros y espacios !"
      ),
    anioVehiculo: Yup.number()
      .positive()
      .integer()
      .required("Año requerido")
      .min(1950, "El año debe ser mayor a 1950")
      .max(añoActual, `El año debe ser menor o igual a ${añoActual}`),
    tonelaje: Yup.number()
      .positive()
      .integer()
      .required("Tonelaje requerido !"),
    idTipoVehiculo: Yup.string().required("Seleccionar tipo !"),
    idModelo: Yup.string().required("Seleccionar modelo !"),
    descripcionVehiculo: Yup.string()
      .required("Descripción obligatoria")
      .matches(
        REGEX_numberString,
        "Solo se admiten letras, numeros y espacios !"
      ),
    idTransportista: Yup.string().required("Seleccionar transportista !"),
    vencimientoSeguro: Yup.date().required(
      "Seleccionar fecha vencimiento seguro"
    ),
    vencimientoRevision: Yup.date().required(
      "Seleccionar fecha vencimiento revisión"
    ),
    idChoferAsignado: Yup.string().required("Seleccionar chofer !"),
  });
};

export default vehicleValidation;
