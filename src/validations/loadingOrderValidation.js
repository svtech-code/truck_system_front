import * as Yup from "yup";

const loadingOrderValidation = () => {
  return Yup.object().shape({
    fecha_orden_carga: Yup.string().trim().required("La fecha es requerida !"),
  });
};

export default loadingOrderValidation;
