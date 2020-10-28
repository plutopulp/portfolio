import React from "react";
import PropTypes from "prop-types";
import { NavbarMenu } from "./styles";
import { NavSections } from "./navSections";

export const Navbar = ({ fixed }) => {
  return (
    <NavbarMenu
      fixed={fixed ? "top" : null}
      inverted
      pointing={true}
      secondary={true}
      size="large"
    >
      <NavSections />
    </NavbarMenu>
  );
};

Navbar.propTypes = {
  fixed: PropTypes.bool.isRequired,
};
