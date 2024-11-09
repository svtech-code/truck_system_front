import * as Yup from "yup";

const detailLoadingOrderValidation = () => {
  return Yup.object().shape({
    desc_detalle_orden_carga: Yup.string()
      .trim()
      .required("Detalle requerido !"),
  });
};

export default detailLoadingOrderValidation;
