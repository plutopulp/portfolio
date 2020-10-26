import React from "react";
import { Sidebar, Menu } from "semantic-ui-react";

import { SidebarMenu } from "./styles";

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
    <Menu.Item as="a" active>
      Home
    </Menu.Item>
    <Menu.Item as="a">Projects</Menu.Item>
    <Menu.Item as="a">Snippets</Menu.Item>
    <Menu.Item as="a">Resume</Menu.Item>
  </Sidebar>
);
