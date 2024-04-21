import { Divider, NavbarItem } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

const NavBar_item = ({ to, title }) => {
  return (
    <NavbarItem className="flex flex-col gap-2 mt-1 hover:scale-105 transition-all duration-300 group">
      <NavLink to={to} className="isActive__item-link px-2">
        {title}
      </NavLink>
      <Divider className="w-0 group-hover:w-[100%] h-[.20rem] bg-white opacity-80 transition-all duration-300 rounded-full" />
    </NavbarItem>
  );
};

export default NavBar_item;
