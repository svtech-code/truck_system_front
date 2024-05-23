import Swal from "sweetalert2";
import apiDelete from "../api/apiDelete";
import apiGet from "../api/apiGet";

// function to delete data
const deleteItemArray = ({ arrayData, idData, propertyId }) => {
  const newArray = arrayData.filter((item) => item[propertyId] !== idData);
  return newArray;
};

const useDeleteNewData = ({
  arrayData, // array con datos de la tabla, para acualizar
  updateStateComponent, // actualizador de estados del mantenedor
  route, // ruta del endpoint
  propertyId, // nombre del objeto que almacena el id del elemento a eliminar
  idData, // id del elemento a eliminar
}) => {
  const onDelete = async () => {
    try {
      await apiDelete({
        route: route,
        param: idData,
      }).then(() => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Registro eliminado",
        }).then(() =>
          // actualización de los datos de la tabla del componente
          updateStateComponent({
            data: deleteItemArray({ arrayData, idData, propertyId }),
          })
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { onDelete };
};

export default useDeleteNewData;
