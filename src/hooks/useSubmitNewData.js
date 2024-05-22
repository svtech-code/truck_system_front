import Swal from "sweetalert2";
import apiPost from "../api/apiPost";
import apiGet from "../api/apiGet";
import apiPut from "../api/apiPut";

const updateArray = ({
  arrayData,
  idData,
  descriptionData,
  propertyId,
  propertyName,
}) => {
  const newArray = arrayData.map((item) => {
    if (item[propertyId] === idData) {
      return {
        ...item,
        [propertyName]: descriptionData,
      };
    }
    return item;
  });

  return newArray;
};

const useSubmitNewData = ({
  data,
  updateStateComponent,
  route,
  propertyId,
  propertyName,
}) => {
  const onSubmit =
    (onClose) =>
    async ({ newData, idData }, { setSubmitting }) => {
      try {
        if (idData === null) {
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
              apiGet({ route: route }).then((response) =>
                updateStateComponent({ data: response?.data })
              )
            );
          });
        } else {
          await apiPut({
            route: `${route}/${idData}`,
            object: { [propertyName]: newData },
          }).then(() => {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Registro actualizado",
            }).then(() => {
              // actualizar datos de la tabla
              updateStateComponent({
                data: updateArray({
                  arrayData: data,
                  idData,
                  descriptionData: newData,
                  propertyId,
                  propertyName,
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

export default useSubmitNewData;
