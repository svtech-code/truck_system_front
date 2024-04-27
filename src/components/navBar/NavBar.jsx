import { useState } from "react";
import {
  Divider,
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import NavBar_logo from "./NavBar_logo";
import NavBar_profile from "./NavBar_profile";
import NavBar_item from "./NavBar_item";
import NavBar_menuItem from "./NavBar_menuItem";

const NabBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // lista de objetos path
  const navLinksMenu = [
    { to: "/home", title: "Home", onClick: toggleMenu },
    { to: "/truckmanagement", title: "Gestión camión", onClick: toggleMenu },
    { to: "/loadingorder", title: "Orden carga", onClick: toggleMenu },
    { to: "/report", title: "Reporte", onClick: toggleMenu },
  ];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      classNames={{
        base: ["bg-gradient-to-l to-[#00597B] from-[#00A3E1]", "rounded-xl"],
        menu: [
          "bg-gradient-to-l to-[#00597B] from-[#00A3E1] text-white",
          "p-5 sm:ml-1 mt-2 mx-auto sm:w-[50%] w-[98%] rounded-xl",
        ],
      }}
    >
      {/* logo para vista compacta */}
      <NavbarContent className="md:hidden text-white" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* logo para vista completa */}
      <NavbarContent
        className="md:hidden w-full text-white font-semibold"
        justify="center"
      >
        <NavBar_logo />
      </NavbarContent>

      {/* lista de rutas */}
      <NavbarContent
        className="hidden md:flex gap-6 w-full text-white font-semibold"
        justify="center"
      >
        <NavBar_logo />

        {navLinksMenu.map(({ to, title }) => (
          <NavBar_item key={to} to={to} title={title} />
        ))}
      </NavbarContent>

      {/* linea divisoria entre rutas y perfil */}
      <Divider
        orientation="vertical"
        className="hidden md:flex w-[.10rem] h-[2.5rem] bg-white opacity-80"
      />

      {/* sección de perfil */}
      <NavbarContent as="div" justify="end">
        <NavBar_profile />
      </NavbarContent>

      {/* lista de rutas vista compacta */}
      <NavbarMenu>
        {navLinksMenu.map(({ to, title, onClick }) => (
          <NavBar_menuItem key={to} to={to} title={title} onClick={onClick} />
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
export default NabBar;
