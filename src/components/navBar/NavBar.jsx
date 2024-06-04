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
import {
  FaChevronDown,
  FaClipboardList,
  FaTruck,
  FaTruckPickup,
  FaUser,
  FaUsersCog,
} from "react-icons/fa";
// import NavBar_DropdownItem from "./NavBar_DropdownItem";
import { useNavigate } from "react-router-dom";
import { HiStatusOnline } from "react-icons/hi";
import { MdModelTraining } from "react-icons/md";

const NabBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navigate = useNavigate();

  // lista de objetos path para menu movile
  const navLinksMenu = [
    { to: "/home", title: "Home", onClick: toggleMenu },
    { to: "/vehicle", title: "Registro vehículos", onClick: toggleMenu },
    { to: "/driver", title: "Gestión chofer", onClick: toggleMenu },
    { to: "/loadingorder", title: "Orden carga", onClick: toggleMenu },
    { to: "/userType", title: "Tipos usuario", onClick: toggleMenu },
    { to: "/vehicletype", title: "Tipos vehículo", onClick: toggleMenu },
    { to: "/vehiclebrand", title: "Marcas vehículo", onClick: toggleMenu },
    { to: "/vehiclestate", title: "Estados vehículo", onClick: toggleMenu },
    { to: "/vehiclemodel", title: "Modelos vehículo", onClick: toggleMenu },
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

        <NavBar_item to={"/home"} title={"Home"} />

        {/* componentizar elemento ------!!!!! */}
        {/* seccion gestion */}
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="flex flex-col bg-transparent text-white mt-2 hover:scale-105"
              >
                <div className="flex gap-2 w-full items-center text-[1rem] font-semibold">
                  Gestión
                  <FaChevronDown />
                </div>
                <Divider className="w-0 group-hover:w-[100%] h-[.20rem] bg-white opacity-80 transition-all duration-300 rounded-full" />
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label="management dropdown menu">
            <DropdownItem
              key={"vehicle"}
              startContent={<FaTruck />}
              onClick={() => navigate("/vehicle")}
            >
              Registro vehículos
            </DropdownItem>
            <DropdownItem
              key={"driver"}
              startContent={<FaUser />}
              onClick={() => navigate("/driver")}
            >
              Gestión chofer
            </DropdownItem>
            <DropdownItem
              key={"loadingorder"}
              startContent={<FaClipboardList />}
              onClick={() => navigate("/loadingorder")}
            >
              Orden carga
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {/* seccion mantenedor */}
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="flex flex-col bg-transparent text-white mt-2 hover:scale-105"
              >
                <div className="flex gap-2 w-full items-center text-[1rem] font-semibold">
                  Mantenimiento
                  <FaChevronDown />
                </div>
                <Divider className="w-0 group-hover:w-[100%] h-[.20rem] bg-white opacity-80 transition-all duration-300 rounded-full" />
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label="management dropdown menu">
            <DropdownItem
              key={"userType"}
              startContent={<FaUsersCog />}
              onClick={() => navigate("/usertype")}
            >
              Tipos usuario
            </DropdownItem>

            <DropdownItem
              key={"vehicletype"}
              startContent={<FaTruckPickup />}
              onClick={() => navigate("/vehicletype")}
            >
              Tipos vehículo
            </DropdownItem>

            <DropdownItem
              key={"vehiclebrand"}
              startContent={<FaClipboardList />}
              onClick={() => navigate("/vehiclebrand")}
            >
              Marcas vehículo
            </DropdownItem>

            <DropdownItem
              key={"vehiclestate"}
              startContent={<HiStatusOnline />}
              onClick={() => navigate("/vehiclestate")}
            >
              Estados vehículo
            </DropdownItem>

            <DropdownItem
              key={"vehiclemodel"}
              startContent={<MdModelTraining />}
              onClick={() => navigate("/vehiclemodel")}
            >
              Modelos vehículo
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

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
        {navLinksMenu.map(({ to, title, onClick }) => (
          <NavBar_menuItem key={to} to={to} title={title} onClick={onClick} />
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
export default NabBar;
