import Swal from "sweetalert2";
import apiPost from "../api/apiPost";
import apiPut from "../api/apiPut";
import { updateArray } from "../utils/methodUpdateArray";

const usePostModel = ({
  data,
  updateStateComponent,
  subAdd,
  updateVehicleData,
}) => {
  const onSubmit =
    (onClose) =>
    async (values, { setSubmitting }) => {
      try {
        // obtención y desestructuración de los datos del formulario
        const { cod_modelo, ...otherFields } = values;

        // ajuste de los datos a enviar
        const payload = {
          desc_modelo: otherFields?.desc_modelo?.toUpperCase(),
          cod_marca: otherFields?.desc_marca,
        };

        if (cod_modelo === null) {
          await apiPost({
            route: "modelos",
            object: payload,
          }).then((response) => {
            Swal.fire({
              icon: "success",
              title: "success",
              text: "Registro almacenado",
            }).then(() => {
              if (!subAdd) {
                // actualización del array de datos
                updateStateComponent({
                  data: updateArray({
                    arrayData: data,
                    idData: response?.data?.cod_modelo,
                    idField: "cod_modelo",
                    updateFields: response?.data,
                  }),
                });
              } else {
                updateVehicleData({ reload: [response?.data] });
              }
            });
          });
        } else {
          await apiPut({
            route: `modelos/${cod_modelo.toString()}`,
            object: payload,
          }).then((response) => {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Registro actualizado",
            }).then(() => {
              // actualizar datos de la tabla
              updateStateComponent({
                data: updateArray({
                  arrayData: data,
                  idData: cod_modelo,
                  idField: "cod_modelo",
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

export default usePostModel;
