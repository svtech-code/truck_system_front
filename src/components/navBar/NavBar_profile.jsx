import useAuth from "../../hooks/useAuth";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import {
  IoLogOut,
  IoMail,
  IoPeopleSharp,
  IoSettingsSharp,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const NavBar_profile = () => {
  const navigate = useNavigate();
  const { authUserName, authEmail, logout } = useAuth();

  const navLinksProfile = [
    {
      key: "profile",
      title: "Perfil usuario",
      icon: <IoPeopleSharp size={25} />,
      onClick: () => navigate("/profile"),
    },
    {
      key: "message",
      title: "Mensajes",
      icon: <IoMail size={25} />,
      onClick: () => navigate("/message"),
    },
    {
      key: "setting",
      title: "Configuración",
      icon: <IoSettingsSharp size={25} />,
      onClick: () => navigate("/setting"),
    },
    {
      key: "logout",
      title: "Logout",
      icon: <IoLogOut size={25} />,
      onClick: logout,
    },
  ];

  return (
    <Dropdown placement="bottom-end" backdrop="blur">
      <DropdownTrigger>
        <Button
          isIconOnly
          className="rounded-full bg-transparent box-content p-1"
        >
          <Avatar
            isBordered
            className="transition-transform"
            color="primary"
            name="Admin" // username del context
            size="md"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704A"
          />
        </Button>
      </DropdownTrigger>

      <DropdownMenu aria-label="user profile dropdown menu" variant="flat">
        <DropdownSection title="Bienvenido" showDivider>
          <DropdownItem
            key="userName"
            className="h-14 gap-2"
            description="admin@gmail.com" // correo del context
          >
            admin
          </DropdownItem>
        </DropdownSection>

        <DropdownSection title="Conjunto de acciones">
          {navLinksProfile.map(({ key, title, icon, onClick }) => (
            <DropdownItem
              key={key}
              startContent={icon}
              onClick={onClick}
              color={key === "logout" ? "danger" : "primary"}
            >
              {title}
            </DropdownItem>
          ))}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavBar_profile;
