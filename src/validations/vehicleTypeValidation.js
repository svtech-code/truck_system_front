import * as Yup from "yup";

const vehicleTypeValidation = () => {
  return Yup.object().shape({
    desc_tipo_vehiculo: Yup.string().trim().required("Seleccionar tipo !"),
  });
};

export default vehicleTypeValidation;
