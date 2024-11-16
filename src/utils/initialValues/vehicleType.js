const defaultInitialValues = {
  cod_tipo_vehiculo: null,
  desc_tipo_vehiculo: "",
  requiere_chofer: true,
  requiere_pioneta: true,
  permite_acoplado: true,
};

const initialValues_vehicleType = ({ data } = {}) => {
  return Object.keys(defaultInitialValues).reduce((acc, key) => {
    acc[key] =
      data && data[key] !== undefined ? data[key] : defaultInitialValues[key];
    return acc;
  }, {});
};

export default initialValues_vehicleType;
