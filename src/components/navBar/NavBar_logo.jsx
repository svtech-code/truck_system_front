import { NavbarBrand } from "@nextui-org/react";
import { IoLogoOctocat } from "react-icons/io";

const NavBar_logo = () => {
  return (
    <NavbarBrand>
      <div className="flex items-center group ">
        <IoLogoOctocat
          size={30}
          className="mx-2 group-hover:drop-shadow-[1px_1px_5px_rgba(255,255,255,0.5)] 
            transition-all duration-300"
        />
        <p
          className="font-bold text-inherit text-2xl
            group-hover:drop-shadow-[1px_1px_5px_rgba(255,255,255,0.5)] 
            transition-all duration-300"
        >
          Truck System
        </p>
      </div>
    </NavbarBrand>
  );
};

export default NavBar_logo;
