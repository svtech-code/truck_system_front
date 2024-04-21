import { NavbarMenuItem } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

const NavBar_menuItem = ({ to, title, onClick }) => {
  return (
    <NavbarMenuItem className="w-full flex flex-col gap-5">
      <NavLink to={to} onClick={onClick} className="isActive__item-link">
        {title}
      </NavLink>
    </NavbarMenuItem>
  );
};

export default NavBar_menuItem;
