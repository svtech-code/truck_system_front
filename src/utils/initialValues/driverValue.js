const defaultInitialValues = {
  cod_usuario: null,
  run_usuario: "",
  nombres_usuario: "",
  apellido_paterno: "",
  apellido_materno: "",
  direccion_usuario: "",
  telefono1: "",
  telefono2: "",
  email: "",
  desc_usuario: "",
  cod_tipo_usuario: 4,
};

const initialValues_driver = ({ data } = {}) => {
  return Object.keys(defaultInitialValues).reduce((acc, key) => {
    acc[key] =
      data && data[key] !== undefined ? data[key] : defaultInitialValues[key];
    return acc;
  }, {});
};

export default initialValues_driver;
