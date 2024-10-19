import Swal from "sweetalert2";
import apiPost from "../../api/apiPost";
import { updateArray } from "../../utils/methodUpdateArray";
import apiPut from "../../api/apiPut";

const useSubmitTaxpayer = ({ data, updateStateComponent }) => {
  const onSubmit =
    (onClose) =>
    async (values, { setSubmitting }) => {
      const { cod_contribuyente, ...otherValues } = values;

      // para normalizar o transformar los datos según se requiera
      const payload = {
        ...otherValues,
      };

      try {
        if (cod_contribuyente === null) {
          await apiPost({
            route: "contribuyentes",
            object: payload,
          }).then((response) => {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Registro almacenado",
            }).then(() => {
              // actualización del contexto de contribuyentes
              console.log(response);
              updateStateComponent({
                data: updateArray({
                  arrayData: data,
                  idData: response?.data?.cod_contribuyente,
                  idField: "cod_contribuyente",
                  updateFields: response?.data,
                }),
              });
            });
          });
        } else {
          await apiPut({
            route: `contribuyentes/${cod_contribuyente.toString()}`,
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
                  idData: cod_contribuyente,
                  idField: "cod_contribuyente",
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

export default useSubmitTaxpayer;
