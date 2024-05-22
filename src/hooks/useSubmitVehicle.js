const useSubmitVehicle = () => {
  const onSubmit =
    (onClose) =>
    async ({ newData }, { setSubmitting }) => {
      try {
        console.log(newData);
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    };

  return { onSubmit };
};

export default useSubmitVehicle;
