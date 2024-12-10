import * as Yup from "yup";

const loadingOrderValidation = () => {
  return Yup.object().shape({
    fecha_orden_carga: Yup.string()
      .trim()
      .required("La fecha es requerida !"),
    cod_transportista: Yup.string()
      .trim()
      .required("El transportista es requerido !"),
    cod_vehiculo: Yup.string()
      .trim()
      .required("El vehiculo es requerido !"),
    cod_chofer: Yup.string()
      .trim()
      .required("El chofer es requerido !"),
    cod_orden_carga: Yup.string()
      .nullable(),
    detalles_orden_carga: Yup.array()
      .when("cod_orden_carga", (cod_orden_carga, schema) => {
        if (cod_orden_carga[0] === null)
          return schema
            .min(1, "Ingresar al menos un detalle !")
            .required("Ingresar detalle !");
        return schema;

      }),
    // detalles_orden_carga: Yup.array()
    //   .min(1, "Ingresar al menos un detalle !")
    //   .required("Ingresar detalle !"),
  });
};

export default loadingOrderValidation;
