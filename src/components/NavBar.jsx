import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { IoLogoOctocat } from "react-icons/io";
import {
  Avatar,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

const NabBar = () => {
  const { logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const menuItems = ["Home", "Truck Management", "Setting"];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
    >
      {/* logo para vista compacta */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* logo para vista completa */}
      <NavbarContent className="sm:hidden pr-3 w-full" justify="center">
        <NavbarBrand>
          <IoLogoOctocat size={30} className="mx-2" />
          <p className="font-bold text-inherit">Truck System</p>
        </NavbarBrand>
      </NavbarContent>

      {/* lista de rutas */}
      <NavbarContent className="hidden sm:flex gap-6 w-full" justify="center">
        <NavbarBrand>
          <IoLogoOctocat size={30} className="mr-2" />
          <p className="font-bold text-inherit" s>
            Truck System
          </p>
        </NavbarBrand>

        <NavbarItem>
          <NavLink to={"/home"} aria-current="page">
            Home
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink to={"/truckmanagement"}>Truck Management</NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink to={"/setting"}>Setting</NavLink>
        </NavbarItem>
      </NavbarContent>

      {/* linea divisoria entre rutas y perfil */}
      <Divider
        orientation="vertical"
        className="hidden sm:flex ml-3 w-[.15rem] h-[3rem]"
      />

      {/* sección de perfil */}
      <NavbarContent as="div" className="p-3" justify="end">
        <Dropdown placement="bottom-end">
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
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">admin@gmail.com</p>
            </DropdownItem>
            <DropdownItem key="proffile">Profile</DropdownItem>
            <DropdownItem key="message">Message</DropdownItem>

            <DropdownItem key="logout" color="danger">
              <NavLink to={"/index"} onClick={() => logout()}>
                Logout
              </NavLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      {/* lista de rutas vista compacta */}
      <NavbarMenu className="bg-orange-200">
        <NavbarMenuItem>
          <NavLink to={"/home"} className="w-full" onClick={toggleMenu}>
            Home
          </NavLink>

          <NavbarItem>
            <NavLink
              to={"/truckmanagement"}
              className="w-full"
              onClick={toggleMenu}
            >
              Truck Management
            </NavLink>

            <NavbarItem>
              <NavLink to={"/setting"} className="w-full" onClick={toggleMenu}>
                Setting
              </NavLink>
            </NavbarItem>
          </NavbarItem>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
export default NabBar;
