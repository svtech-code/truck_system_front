import useAuth from "../../hooks/useAuth";
import { NavLink } from "react-router-dom";
import {
  Avatar,
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
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="primary"
          name="Admin"
          size="md"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704A"
        />
      </DropdownTrigger>

      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownSection title="Bienvenido" showDivider>
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="text-md">admin</p>
            <p className="text-sm text-gray-400">admin@gmail.com</p>
          </DropdownItem>
        </DropdownSection>
        <DropdownSection>
          <DropdownItem
            key="proffile"
            startContent={<IoPeopleSharp size={25} />}
          >
            Profile
          </DropdownItem>
          <DropdownItem key="message" startContent={<IoMail size={25} />}>
            Message
          </DropdownItem>

          <DropdownItem
            key="logout"
            color="danger"
            startContent={<IoLogOut size={25} />}
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
