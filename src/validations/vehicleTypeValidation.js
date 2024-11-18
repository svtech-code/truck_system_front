import * as Yup from "yup";
import { REGEX_numberString } from "../utils/regularExpressions";

const vehicleTypeValidation = () => {
  return Yup.object().shape({
    desc_tipo_vehiculo: Yup.string()
      .trim()
      .required("Seleccionar tipo !")
      .matches(
        REGEX_numberString,
        "Solo se admiten letras, números y espacios !"
      ),
  });
};

export default vehicleTypeValidation;
