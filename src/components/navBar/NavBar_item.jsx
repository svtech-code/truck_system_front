import { NavbarItem } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

const NavBar_item = ({ to, children, onClick }) => {
  return (
    <NavbarItem>
      <NavLink to={to} onClick={onClick}>
        {children}
      </NavLink>
    </NavbarItem>
  );
};

export default NavBar_item;
