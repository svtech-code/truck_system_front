import { Button, Spinner } from "@nextui-org/react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useDeleteNewData from "../hooks/useDeleteNewData";

const ActionButton = ({
  data, // array con datos de la tabla
  row, // columna con los datos y sus propiedades
  onOpen, // función open del modal
  route, // ruta del endpoint del mantenedor
  propertyId, // nombre de la propiedad que almacena el id
  propertyName, // nombre de la propiedad que almacena el nombre
  updateStateComponent, // actualizador de los estados del mantenedor
  dataKey, // nombre del state principal a ser actualizado
  loaderData, // estado para manejar la carga masiva de datos
}) => {
  const loader = loaderData ? loaderData : false;

  const handlerEdit = () => {
    updateStateComponent({
      edit: true,
      descriptionEdit: row[propertyName],
      idEdit: row[propertyId],
    });
    onOpen();
  };

  // funcion de eliminar
  const { onDelete } = useDeleteNewData({
    arrayData: data, // array de datos de la tabla
    updateStateComponent, // actualizador de estados del mantenedor
    route, // ruta del endpoint
    propertyId, // nombre del objeto que almacena el id
    idData: row[propertyId], // id del valor a eliminar
    dataKey: dataKey,
  });

  return (
    <div className="flex gap-4 items-center">
      {/* btn update */}
      <Button
        // isIconOnly
        color="primary"
        aria-label="Edit"
        onClick={handlerEdit}
        isDisabled={loader}
      >
        {loader ? <Spinner size="sm" color="default" /> : <FaEdit size={20} />}
      </Button>

      {/* btn delete */}
      <Button color="danger" aria-label="Edit" onClick={onDelete}>
        <FaTrashAlt size={20} />
      </Button>
    </div>
  );
};

export default ActionButton;
