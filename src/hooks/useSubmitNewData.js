import Swal from "sweetalert2";
import apiPost from "../api/apiPost";
import apiPut from "../api/apiPut";

// funciton to add new data or update data
const updateArray = ({
  arrayData,
  idData,
  descriptionData,
  propertyId,
  propertyName,
}) => {
  // verificación de la existencia del id
  const exists = arrayData.some((item) => item[propertyId] === idData);

  // si existe el id, se actualizan los datos
  if (exists) {
    return arrayData.map((item) => {
      if (item[propertyId] === idData) {
        return {
          ...item,
          [propertyName]: descriptionData,
        };
      }
      return item;
    });
  }

  // si no existe el id, se agrega el nuevo dato
  const newItem = {
    [propertyId]: idData,
    [propertyName]: descriptionData,
  };

  return [...arrayData, newItem];
};

// function submit to add and update data
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
            object: { [propertyName]: newData.toUpperCase() },
          }).then((response) => {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Registro almacenado",
            }).then(() =>
              // actualizar datos de la tabla
              updateStateComponent({
                data: updateArray({
                  arrayData: data,
                  idData: response?.data?.[propertyId],
                  descriptionData: newData,
                  propertyId,
                  propertyName,
                }),
              })
            );
          });
        } else {
          await apiPut({
            route: `${route}/${idData}`,
            object: { [propertyName]: newData.toUpperCase() },
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
