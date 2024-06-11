const defaultInitialValues = {
  cod_vehiculo: null,
  desc_vehiculo: "",
  // cod_tipo_vehiculo: "", // cambiado por como se obtienen los datos
  desc_tipo_vehiculo: "",
  // cod_modelo: "",
  desc_modelo: "",
  cod_estado_vehiculo: 1,
  anio: "",
  fecha_vigencia_seguro: "",
  fecha_vigencia_revision: "",
  cantidad_kilos: "",
  // patente: "", // valor derivado de patente completa
  patente_completa: "",
  desc_chofer: "",
  cod_acoplado: null,
  cod_marca: "", // ver si es necesario ??
  idTransportista: "", // cambiar por id_transportista
};

const initialValues_vehicle = ({ data } = {}) => {
  return Object.keys(defaultInitialValues).reduce((acc, key) => {
    acc[key] =
      data && data[key] !== undefined ? data[key] : defaultInitialValues[key];
    return acc;
  }, {});
};

export default initialValues_vehicle;
