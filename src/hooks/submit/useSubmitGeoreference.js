import Swal from "sweetalert2";
import apiPost from "../../api/apiPost";
import { updateArray } from "../../utils/methodUpdateArray";
import apiPut from "../../api/apiPut";

const useSubmitGeoreference = ({ data, updateStateComponent }) => {
  const onSubmit =
    (onClose) =>
    async (values, { setSubmitting }) => {
      const { cod_georeferencia, ...otherValues } = values;

      // para normalizar o transformar los datos según se requiera
      const payload = {
        ...otherValues,
      };

      try {
        if (cod_georeferencia === null) {
          await apiPost({
            route: "georeferencias",
            object: payload,
          }).then((response) => {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Registro almacenado",
            }).then(() => {
              // actualización del contexto de georeferencias
              updateStateComponent({
                data: updateArray({
                  arrayData: data,
                  idData: response?.data?.cod_georeferencia,
                  idField: "cod_georeferencia",
                  updateFields: response?.data,
                }),
              });
            });
          });
        } else {
          await apiPut({
            route: `georeferencias/${cod_georeferencia.toString()}`,
            object: payload,
          }).then((response) => {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Registro actualizado",
            }).then(() => {
              // actualización del contexto
              updateStateComponent({
                data: updateArray({
                  arrayData: data,
                  idData: cod_georeferencia,
                  idField: "cod_georeferencia",
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

export default useSubmitGeoreference;
