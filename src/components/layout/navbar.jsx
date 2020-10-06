import React from "react";
import styled from "styled-components";
import { Container, Menu, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";

const NavbarContainer = ({ fixed }) => {
  // On refresh - get the current active item from url
  const [activeItem, setActiveItem] = React.useState(
    window.location.pathname
      .split("")
      .filter((c) => c !== "/")
      .join("")
  );

  const handleItemClick = (event, { name }) => setActiveItem(name);

  return (
    <Navbar
      fixed={fixed}
      activeItem={activeItem}
      handleClick={handleItemClick}
    />
  );
};

const Navbar = ({ fixed, activeItem, handleClick }) => {
  return (
    <Menu
      fixed={fixed ? "top" : null}
      inverted={!fixed}
      pointing={!fixed}
      secondary={!fixed}
      size="large"
    >
      <Container>
        <NavLink to={routes.pages.home}>
          <Menu.Item
            as="a"
            name="home"
            active={activeItem === "home"}
            onClick={handleClick}
          />
        </NavLink>
        <NavLink to={routes.pages.projects}>
          <Menu.Item
            as="a"
            name="projects"
            active={activeItem === "projects"}
            onClick={handleClick}
          />
        </NavLink>
        <NavLink to={routes.pages.snippets}>
          <Menu.Item
            as="a"
            name="snippets"
            active={activeItem === "snippets"}
            onClick={handleClick}
          />
        </NavLink>
        <NavLink to={routes.pages.resume}>
          <Menu.Item
            as="a"
            name="resume"
            active={activeItem === "resume"}
            onClick={handleClick}
          />
        </NavLink>
      </Container>
    </Menu>
  );
};

export default NavbarContainer;
