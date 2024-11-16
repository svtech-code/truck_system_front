const useSubmitVehicleType = ({ data, updateStateComponent }) => {
  const onSubmit = async (values, { setSubmitting }) => {
    const { cod_tipo_vehiculo, ...otherValues } = values;

    const payload = {
      ...otherValues,
    };

    console.log(payload);
  };
};

export default useSubmitVehicleType;
