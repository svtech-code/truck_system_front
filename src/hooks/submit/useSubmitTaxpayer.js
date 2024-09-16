import Swal from "sweetalert2";
import apiPost from "../../api/apiPost";
import { updateArray } from "../../utils/methodUpdateArray";

const useSubmitTaxpayer = ({ data, updateStateComponent }) => {
  const onSubmit =
    (onClose) =>
    async (values, { setSubmitting }) => {
      const { cod_contribuyente, ...otherValues } = values;

      // para normalizar o transformar los datos según se requiera
      const payload = {
        ...otherValues,
        // georeferencias: [1, 3],
      };

      try {
        if (cod_contribuyente === null) {
          // await apiPost({
          //   route: "contribuyentes",
          //   object: payload,
          // }).then((response) => {
          //   Swal.fire({
          //     icon: "success",
          //     title: "Success",
          //     text: "Registro almacenado",
          //   }).then(() => {
          //     // actualización del contexto de contribuyentes
          //     updateStateComponent({
          //       data: updateArray({
          //         arrayData: data,
          //         idData: response?.data?.cod_contribuyente,
          //         idField: "cod_contribuyente",
          //         updateFields: response?.data,
          //       }),
          //     });
          //   });
          // });
          console.log(payload);
        } else {
          console.log("Modificación de usuario: cod " + cod_contribuyente);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    };

  return { onSubmit };
};

export default useSubmitTaxpayer;
