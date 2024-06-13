const defaultInitialValues = {
  cod_modelo: null,
  desc_modelo: "",
  desc_marca: "",
};

const initialValues_model = ({ data } = {}) => {
  return Object.keys(defaultInitialValues).reduce((acc, key) => {
    acc[key] =
      data && data[key] !== undefined ? data[key] : defaultInitialValues[key];
    return acc;
  }, {});
};

export default initialValues_model;
