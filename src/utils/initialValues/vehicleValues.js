const defaultInitialValues = {
  cod_vehiculo: null,
  anio: "",
  cantidad_kilos: "",
  requiere_chofer: null,
  requiere_pioneta: null,
  permite_acoplado: null,
  cod_acoplado: null,
  cod_chofer: null,
  cod_transportista: null, // trabajar de manera interna
  cod_vehiculo: null,
  cod_tipo_vehiculo: null,
  cod_marca: null,
  desc_acoplado: "",
  desc_chofer: "",
  desc_estado_vehiculo: "",
  desc_marca: "",
  desc_modelo: "",
  desc_tipo_vehiculo: "",
  desc_transportista: "",
  desc_vehiculo: "",
  fecha_vigencia_revision: "",
  fecha_vigencia_seguro: "",
  patente: "",
  patente_completa: "",
  cod_estado_vehiculo: 1,
};

const initialValues_vehicle = ({ data } = {}) => {
  return Object.keys(defaultInitialValues).reduce((acc, key) => {
    acc[key] =
      data && data[key] !== undefined ? data[key] : defaultInitialValues[key];
    return acc;
  }, {});
};

export default initialValues_vehicle;
