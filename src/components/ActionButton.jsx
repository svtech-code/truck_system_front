import { Button } from "@nextui-org/react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ActionButton = ({
  row,
  onOpen,
  propertyId,
  propertyName,
  updateStateComponent,
}) => {
  const handlerEdit = () => {
    updateStateComponent({
      edit: true,
      descriptionEdit: row[propertyName],
      idEdit: row[propertyId],
    });
    onOpen();
  };

  return (
    <div className="flex gap-4 items-center">
      <Button
        isIconOnly
        color="primary"
        aria-label="Edit"
        onClick={handlerEdit}
      >
        <FaEdit size={20} />
      </Button>
      <Button
        isIconOnly
        color="danger"
        aria-label="Edit"
        onClick={() => alert(`Eliminar`)}
      >
        <FaTrashAlt size={20} />
      </Button>
    </div>
  );
};

export default ActionButton;
