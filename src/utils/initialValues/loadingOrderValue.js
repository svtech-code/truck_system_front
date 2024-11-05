const today = new Date().toISOString().split("T")[0];

const defaultInitialValues = {
  cod_orden_carga: null,
  desc_orden_carga: "",
  num_orden_carga: null,
  fecha_orden_carga: today,
  cod_vehiculo: null,
  desc_vehiculo: "",
  cod_chofer: null,
  desc_chofer: "",
  cod_transportista: null,
  desc_transportista: "",
  cod_acoplado: null,
  desc_acoplado: "",
  detalles_orden_carga: [],
};

const initialValues_LoadingOrder = ({ data } = {}) => {
  return Object.keys(defaultInitialValues).reduce((acc, key) => {
    acc[key] =
      data && data[key] !== undefined ? data[key] : defaultInitialValues[key];
    return acc;
  }, {});
};

export default initialValues_LoadingOrder;
