const today = new Date().toISOString().split("T")[0];

const defaultInitialValues = {
  cod_detalle_orden_carga: null,
  desc_detalle_orden_carga: "",
  cod_cliente: null,
  desc_cliente: "",
  cod_origen: null,
  desc_origen: "",
  cod_destino: null,
  desc_destino: "",
  cod_tipo_cobro: 1,
  desc_tipo_cobro: "",
  valor_cobro: 0,
  num_acuse: null,
  fecha_acuse: today,
};

const initialValues_DetailLoadingOrder = ({ data } = {}) => {
  return Object.keys(defaultInitialValues).reduce((acc, key) => {
    acc[key] = data?.[key] ?? defaultInitialValues[key];
    return acc;
  }, {});
};

export default initialValues_DetailLoadingOrder;
