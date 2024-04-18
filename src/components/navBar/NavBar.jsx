import { useState } from "react";
import {
  Divider,
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import NavBar_logo from "./NavBar_logo";
import NavBar_profile from "./NavBar_profile";
import NavBar_item from "./NavBar_item";

const NabBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // lista de objetos path
  const navLinks = [
    { to: "/home", title: "Home", onClick: toggleMenu },
    { to: "/truckmanagement", title: "Truck Management", onClick: toggleMenu },
    { to: "/setting", title: "Setting", onClick: toggleMenu },
  ];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="relative rounded-2xl bg-gradient-to-l to-[#00597B] from-[#00A3E1]"
    >
      {/* logo para vista compacta */}
      <NavbarContent className="sm:hidden text-white" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* logo para vista completa */}
      <NavbarContent
        className="sm:hidden pr-3 w-full text-white font-semibold"
        justify="center"
      >
        <NavBar_logo />
      </NavbarContent>

      {/* lista de rutas */}
      <NavbarContent
        className="hidden sm:flex gap-6 w-full text-white font-semibold"
        justify="center"
      >
        <NavBar_logo />

        {navLinks.map(({ to, title }) => (
          <NavBar_item to={to}>{title}</NavBar_item>
        ))}
      </NavbarContent>

      {/* linea divisoria entre rutas y perfil */}
      <Divider
        orientation="vertical"
        className="hidden sm:flex ml-3 w-[.10rem] h-[2.5rem] bg-white opacity-80"
      />

      {/* sección de perfil */}
      <NavbarContent as="div" className="p-3" justify="end">
        <NavBar_profile />
      </NavbarContent>

      {/* lista de rutas vista compacta */}
      <NavbarMenu className="bg-orange-200">
        <NavbarMenuItem className="w-full">
          {navLinks.map(({ to, title, onClick }) => (
            <NavBar_item to={to} onClick={onClick}>
              {title}
            </NavBar_item>
          ))}
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
export default NabBar;
