import { DropdownItem } from "@nextui-org/react";
import { FaTruck, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavBar_DropdownItem = ({ type }) => {
  const navigate = useNavigate();

  // objetos con las propiedades del dropdown
  const navLinksDropdown = {
    camion: {
      key: "truck",
      title: "Camión",
      icon: <FaTruck />,
      onClick: () => navigate("/truck"),
    },
    chofer: {
      key: "driver",
      title: "Chofer",
      icon: <FaUser />,
      onClick: () => navigate("/driver"),
    },
    OrdenCarga: {
      key: "loadingorder",
      title: "Orden Carga",
      icon: <FaUser />,
      onClick: () => navigate("/loadingorder"),
    },
  };

  // seleción del objeto a utilizar
  const selectType = navLinksDropdown[type] || {};

  return (
    <DropdownItem
      key={selectType.key}
      startContent={selectType.icon}
      onClick={selectType.onClick}
    >
      {selectType.title}
    </DropdownItem>
  );
};

export default NavBar_DropdownItem;
