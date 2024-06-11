// const initialValues_model = ({ data }) => {
//   if (data) {
//     const { cod_modelo, desc_marca, desc_modelo } = data;
//     return {
//       idModelo: cod_modelo,
//       modelo: desc_modelo,
//       idMarca: desc_marca,
//     };
//   } else {
//     return {
//       idModelo: null,
//       modelo: "",
//       idMarca: "",
//     };
//   }
// };

// export default initialValues_model;

// const defaultValues = {
//   cod_modelo: null,
//   desc_marca: "",
//   desc_modelo: "",
//   // Puedes agregar más atributos aquí con sus valores predeterminados
// };

// const initialValues_model = ({ data } = {}) => {
//   return Object.keys(defaultValues).reduce((acc, key) => {
//     acc[key] = data && data[key] !== undefined ? data[key] : defaultValues[key];
//     return acc;
//   }, {});
// };

// export default initialValues_model;

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
