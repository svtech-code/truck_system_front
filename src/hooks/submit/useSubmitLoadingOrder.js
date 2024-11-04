const useSubmitLoadingOrder = ({ data, updateStateComponent }) => {
  const onSubmit =
    (onClose) =>
    async (values, { setSubmiting }) => {
      const { cod_loadingOrder, ...otherValues } = values;

      console.log(values);
    };

  return { onSubmit };
};

export default useSubmitLoadingOrder;
