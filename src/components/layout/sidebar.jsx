import React from "react";
import PropTypes from "prop-types";
import { Sidebar, Menu } from "semantic-ui-react";
import { NavSections } from "./navSections";

export const MobileSidebar = ({ onHide, open }) => (
  <Sidebar
    style={{ background: "#2f303a" }}
    as={Menu}
    animation="overlay"
    inverted
    onHide={onHide}
    vertical
    visible={open}
  >
    <NavSections />
  </Sidebar>
);

MobileSidebar.propTypes = {
  onHide: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
