import { Button } from "@nextui-org/react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ActionButton = ({ row, oneClick, twoClick }) => {
  return (
    <div className="flex gap-4 items-center">
      <Button
        isIconOnly
        color="primary"
        aria-label="Edit"
        onClick={() => alert(`Editar`)}
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
