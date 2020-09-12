import React from "react";
import { Sidebar, Menu } from "semantic-ui-react";

export const MobileSidebar = ({ onHide, open }) => (
  <Sidebar
    as={Menu}
    animation="overlay"
    inverted
    onHide={onHide}
    vertical
    visible={open}
  >
    <Menu.Item as="a" active>
      Home
    </Menu.Item>
    <Menu.Item as="a">Projects</Menu.Item>
    <Menu.Item as="a">Snippets</Menu.Item>
    <Menu.Item as="a">Resume</Menu.Item>
    <Menu.Item as="a">Log in</Menu.Item>
    <Menu.Item as="a">Sign Up</Menu.Item>
  </Sidebar>
);
