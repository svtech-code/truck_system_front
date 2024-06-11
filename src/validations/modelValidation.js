import * as Yup from "yup";
import { REGEX_numberString } from "../utils/regularExpressions";

const modelValidation = () => {
  return Yup.object().shape({
    desc_modelo: Yup.string()
      .trim()
      .min(1, "Escribe un modelo válido")
      .required("Ingresar modelo !")
      .matches(
        REGEX_numberString,
        "Solo se admiten letras, números y espacios !"
      ),
    desc_marca: Yup.string().required("Seleccionar marca !"),
  });
};

export default modelValidation;
