import apiPost from "../../api/apiPost";
import Swal from "sweetalert2";
import apiPut from "../../api/apiPut";
import { updateArray } from "../../utils/methodUpdateArray";

const useSubmitLoadingOrder = ({ data, updateStateComponent }) => {
  const onSubmit =
    (onClose) =>
      async (values, { setSubmitting }) => {
        const { cod_orden_carga, ...otherValues } = values;

        // para normalizar o transformar los datos según se requiera
        const payload = {
          ...otherValues,
        };

        try {
          if (cod_orden_carga === null) {
            await apiPost({
              route: "orden_carga",
              object: payload,
            }).then((response) => {
              Swal.fire({
                icon: "success",
                title: "Success",
                text: "Registro almacenado",
              }).then(() => {

                console.log(response?.data)

                // actualización del contexto de loadingOrders
                updateStateComponent({
                  data: updateArray({
                    arrayData: data,
                    idData: response?.data?.cod_orden_carga,
                    idField: "cod_orden_carga",
                    updateFields: response?.data,
                  }),
                });
              });
            });
          } else {

            await apiPut({
              route: `orden_carga/${cod_orden_carga}`,
              object: payload,
            }).then((response) => {
              Swal.fire({
                icon: "success",
                title: "Success",
                text: "Registro actualizado",
              }).then(() => {
                // actualización del contexto de loadingOrders
                updateStateComponent({
                  data: updateArray({
                    arrayData: data,
                    idData: response?.data?.cod_orden_carga,
                    idField: "cod_orden_carga",
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

export default useSubmitLoadingOrder;
