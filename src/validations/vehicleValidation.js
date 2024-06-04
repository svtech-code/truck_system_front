import * as Yup from "yup";
import { REGEX_numberString } from "../utils/regularExpressions";

const vehicleValidation = () => {
  return Yup.object().shape({
    patente: Yup.string()
      .trim()
      .min(1, "El modelo debe contener al menos 1 caracter !")
      .required("Modelo requerido")
      .matches(
        REGEX_numberString,
        "Solo se admiten letras numeros y espacios !"
      ),
    anioVehiculo: Yup.number().positive().integer().required("Año requerido"),
  });
};

export default vehicleValidation;
