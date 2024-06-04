const useSubmitVehicle = () => {
  const onSubmit =
    (onClose) =>
    async (values, { setSubmitting }) => {
      try {
        console.log(values);
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    };

  return { onSubmit };
};

export default useSubmitVehicle;
