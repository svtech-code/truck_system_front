import { useState } from "react";
import {
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import NavBar_logo from "./NavBar_logo";
import NavBar_profile from "./NavBar_profile";
import NavBar_item from "./NavBar_item";
import NavBar_menuItem from "./NavBar_menuItem";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { navLinkMenuMovile, navLinkSubMenuDesktop } from "./objectMenu";

const NabBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navigate = useNavigate();

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
        className="hidden md:flex gap-5 w-full text-white font-semibold"
        justify="center"
      >
        <NavBar_logo />

        <NavBar_item to={"/home"} title={"Home"} />

        {/* menus con submenu */}
        {navLinkSubMenuDesktop.map((menu) => (
          <Dropdown key={menu.label}>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="flex flex-col bg-transparent text-white mt-1 hover:scale-105 p-1 group"
                >
                  <div className="flex gap-2 w-full items-center text-[1rem] font-semibold">
                    {menu.label}
                    <FaChevronDown />
                  </div>
                  <Divider className="self-center w-0 group-hover:w-[100%] h-[.20rem] bg-white opacity-80 transition-all duration-300 rounded-full" />
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label={`${menu.label.toLowerCase()} dropdown menu`}
            >
              {menu.items.map((item) => (
                <DropdownItem
                  key={item.key}
                  startContent={item.icon}
                  onClick={() => navigate(item.path)}
                >
                  {item.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        ))}

        <NavBar_item to={"/report"} title={"Reporte"} />
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
        {navLinkMenuMovile.map(({ to, title }) => (
          <NavBar_menuItem
            key={to}
            to={to}
            title={title}
            onClick={toggleMenu}
          />
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
export default NabBar;
