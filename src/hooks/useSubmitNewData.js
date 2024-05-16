import Swal from "sweetalert2";
import apiPost from "../api/apiPost";
import apiGet from "../api/apiGet";

const useSubmitNewData = ({ setData, route, propertyName }) => {
  const onSubmit =
    (onClose) =>
    async ({ newData }, { setSubmitting }) => {
      try {
        await apiPost({
          route: route,
          object: { [propertyName]: newData },
        }).then(() => {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Registro almacenado",
          }).then(() =>
            // actualizar datos de la tabla
            apiGet({ route: route }).then((response) => setData(response?.data))
          );

          // cerrar modal
          onClose();
        });
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    };

  return { onSubmit };
};

export default useSubmitNewData;
