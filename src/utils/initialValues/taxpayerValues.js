const defaultInitialValues = {
  run_contribuyente: "",
  nombre_contribuyente: "",
  apellido_paterno_contribuyente: "",
  apellido_materno_contribuyente: "",
  email: "",
  telefono1_contribuyente: "",
  telefono2_contribuyente: "",
  direccion_contribuyente: "",
  direccion_numero: "",
  cod_comuna: null,
  transportista: true,
  estado_contribuyente: 1,
  desc_contribuyente: "",
  georeferencias: [],
};

const initialValues_taxpayer = ({ data } = {}) => {
  return Object.keys(defaultInitialValues).reduce((acc, key) => {
    acc[key] =
      data && data[key] !== undefined ? data[key] : defaultInitialValues[key];
    return acc;
  }, {});
};

export default initialValues_taxpayer;
