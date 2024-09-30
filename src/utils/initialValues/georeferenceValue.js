const defaultInitialValues = {
  cod_georeferencia: null,
  direccion: "",
  numero: "",
  referencia_direccion: "",
  latitud: null,
  longitud: null,
  cod_comuna: null,
  desc_comuna: "",
  desc_georeferencia: "",
};

const initialValues_georeference = ({ data } = {}) => {
  return Object.keys(defaultInitialValues).reduce((acc, key) => {
    acc[key] =
      data && data[key] !== undefined ? data[key] : defaultInitialValues[key];
    return acc;
  }, {});
};

export default initialValues_georeference;
