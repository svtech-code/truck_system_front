const defaultInitialValues = {
  cod_vehiculo: null,
  desc_vehiculo: "",
  desc_tipo_vehiculo: "",
  desc_modelo: "",
  cod_estado_vehiculo: 1,
  anio: "",
  fecha_vigencia_seguro: "",
  fecha_vigencia_revision: "",
  cantidad_kilos: "",
  patente_completa: "",
  desc_chofer: "",
  cod_acoplado: null,
  cod_marca: "",
  idTransportista: "",
};

const initialValues_vehicle = ({ data } = {}) => {
  return Object.keys(defaultInitialValues).reduce((acc, key) => {
    acc[key] =
      data && data[key] !== undefined ? data[key] : defaultInitialValues[key];
    return acc;
  }, {});
};

export default initialValues_vehicle;
