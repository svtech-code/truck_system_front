const useSubmitTaxpayer = ({ data, updateStateComponent }) => {
  const onSubmit =
    (onClose) =>
    async (values, { setSubmitting }) => {
      console.log(values);
    };

  return { onSubmit };
};

export default useSubmitTaxpayer;
