import useAuth from "../../hooks/useAuth";
import { NavLink } from "react-router-dom";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { IoLogOut, IoMail, IoPeopleSharp } from "react-icons/io5";

const NavBar_profile = () => {
  // información de la cuenta a mostrar
  const { authUserName, authEmail, logout } = useAuth();

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
          <DropdownItem
            key="profile"
            startContent={<IoPeopleSharp size={25} />}
          >
            Perfil de usuario
          </DropdownItem>

          <DropdownItem key="message" startContent={<IoMail size={25} />}>
            Mensajes
          </DropdownItem>

          <DropdownItem
            key="logout"
            color="danger"
            startContent={<IoLogOut size={25} />}
            textValue="Logout"
          >
            <NavLink to={"/index"} onClick={() => logout()}>
              Logout
            </NavLink>
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavBar_profile;
