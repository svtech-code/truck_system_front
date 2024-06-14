import Swal from "sweetalert2";
import apiPost from "../api/apiPost";
import { updateArray } from "../utils/methodUpdateArray";
import apiPut from "../api/apiPut";

const usePostVehicle = ({ data, updateStateComponent }) => {
  const onSubmit =
    (onClose) =>
    async (values, { setSubmitting }) => {
      const { cod_vehiculo, ...otherFields } = values;

      const payload = {
        ...otherFields,
        desc_vehiculo: otherFields?.desc_vehiculo.toUpperCase(),
        cod_tipo_vehiculo: otherFields?.desc_tipo_vehiculo,
        cod_modelo: otherFields?.desc_modelo,
        cod_chofer: otherFields?.desc_chofer,
        patente: otherFields?.patente_completa.slice(0, -2),
        idTransportista: 1, // valor momentaneamente fijo
        cod_acoplado:
          otherFields?.cod_acoplado === "" ? null : otherFields?.cod_acoplado,
      };

      try {
        if (cod_vehiculo === null) {
          await apiPost({
            route: "vehiculos",
            object: payload,
          }).then((response) => {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Registro almacenado",
            }).then(() => {
              // actualización del array de datos
              updateStateComponent({
                data: updateArray({
                  arrayData: data,
                  idData: response?.data?.cod_vehiculo,
                  idField: "cod_vehiculo",
                  updateFields: response?.data,
                }),
              });
            });
          });
        } else {
          await apiPut({
            route: `vehiculos/${cod_vehiculo.toString()}`,
            object: payload,
          }).then((response) => {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Registro actualizado",
            }).then(() => {
              // actualización del array
              updateStateComponent({
                data: updateArray({
                  arrayData: data,
                  idData: cod_vehiculo,
                  idField: "cod_vehiculo",
                  updateFields: response?.data,
                }),
              });
            });
          });
        }

        // cerrar modal
        onClose();
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    };

  return { onSubmit };
};

export default usePostVehicle;
