import React from "react";
import PropTypes from "prop-types";
import { NavbarMenu } from "./styles";
import { NavItems } from "./navItems";

export const Navbar = ({ fixed }) => {
  return (
    <NavbarMenu
      fixed={fixed ? "top" : null}
      inverted
      pointing={true}
      secondary={true}
      size="large"
    >
      <NavItems />
    </NavbarMenu>
  );
};

Navbar.propTypes = {
  fixed: PropTypes.bool.isRequired,
};
