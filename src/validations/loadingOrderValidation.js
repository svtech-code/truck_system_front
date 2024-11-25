import * as Yup from "yup";

const loadingOrderValidation = () => {
  return Yup.object().shape({
    fecha_orden_carga: Yup.string().trim().required("La fecha es requerida !"),
    cod_vehiculo: Yup.string().trim().required("El vehiculo es requerido !"),
    cod_chofer: Yup.string().trim().required("El chofer es requerido !"),
    detalles_orden_carga: Yup.array()
      .min(1, "Ingresar al menos un detalle !")
      .required("Ingresar detalle !"),
  });
};

export default loadingOrderValidation;
