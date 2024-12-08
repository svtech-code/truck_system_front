import * as Yup from "yup";
import { REGEX_numberString } from "../utils/regularExpressions";

const detailLoadingOrderValidation = () => {
  return Yup.object().shape({
    desc_detalle_orden_carga: Yup.string()
      .trim()
      .required("Detalle requerido !")
      .matches(REGEX_numberString, "Se han ingresado caracteres no validos !"),
    cod_cliente: Yup.string()
      .trim()
      .required("Contribuyente requerido !"),
    cod_origen: Yup.string()
      .trim()
      .required("Origen requerido !"),
    cod_destino: Yup.string()
      .trim()
      .required("Destino requerido !"),
  });
};

// ver si es necesario agregar validación para los otros campos que son select component

export default detailLoadingOrderValidation;
