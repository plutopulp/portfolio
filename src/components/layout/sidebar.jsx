import React from "react";
import { Sidebar, Menu } from "semantic-ui-react";
import { NavItems } from "./navItems";

export const MobileSidebar = ({ onHide, open }) => {
  return (
    <Sidebar
      style={{ background: "#2f303a" }}
      as={Menu}
      animation="overlay"
      inverted
      onHide={onHide}
      vertical
      visible={open}
    >
      <NavItems />
    </Sidebar>
  );
};
