import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, name }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "bg-gradient-to-br from-bgPrimary to-bgSecondary normal-case  shadow-md  text-gray-700 border px-3 py-1 border-gray-200 font-semibold rounded-md lg:mt-0 mt-4"
          : "hover:shadow-lg text-gray-700 border px-3 py-1 border-gray-200 font-semibold rounded-md lg:mt-0 mt-4"
      }
      to={to}
    >
      {name}
    </NavLink>
  );
};

export default NavItem;
