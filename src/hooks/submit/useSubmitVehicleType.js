import Swal from "sweetalert2";
import apiPost from "../../api/apiPost";
import { updateArray } from "../../utils/methodUpdateArray";
import apiPut from "../../api/apiPut";

const useSubmitVehicleType = ({ data, updateStateComponent }) => {
  const onSubmit =
    (onClose) =>
    async (values, { setSubmitting }) => {
      const { cod_tipo_vehiculo, ...otherValues } = values;

      const payload = {
        ...otherValues,
      };

      try {
        if (cod_tipo_vehiculo === null) {
          await apiPost({
            route: "tipo_vehiculos",
            object: payload,
          }).then((response) => {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Registro almacenado",
            }).then(() => {
              updateStateComponent({
                data: updateArray({
                  arrayData: data,
                  idData: response?.data?.cod_tipo_vehiculo,
                  idField: "cod_tipo_vehiculo",
                  updateFields: response?.data,
                }),
              });
              onClose();
            });
          });
        } else {
          await apiPut({
            route: `tipo_vehiculos/${cod_tipo_vehiculo}`,
            object: payload,
          }).then((response) => {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Registro actualizado",
            }).then(() => {
              updateStateComponent({
                data: updateArray({
                  arrayData: data,
                  idData: cod_tipo_vehiculo,
                  idField: "cod_tipo_vehiculo",
                  updateFields: response?.data,
                }),
              });
              onClose();
            });
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    };

  return { onSubmit };
};

export default useSubmitVehicleType;
