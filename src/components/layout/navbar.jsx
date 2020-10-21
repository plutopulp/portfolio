import React from "react";
import styled from "styled-components";
import { Container, Menu } from "semantic-ui-react";
import AnchorLink from "react-anchor-link-smooth-scroll";

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

const StyledMenu = styled(Menu)`
  &.ui.secondary.inverted.pointing.menu {
    margin: 0;
    border-style: none;
  }
  &.ui.menu {
    background-color: #2f303a;
  }
`;
const Navbar = ({ fixed, activeItem, handleClick }) => {
  return (
    <StyledMenu
      fixed={fixed ? "top" : null}
      inverted
      pointing={!fixed}
      secondary={!fixed}
      size="large"
    >
      <Container>
        <AnchorLink href="#landing">
          <Menu.Item
            as="a"
            name="home"
            active={activeItem === "home"}
            onClick={handleClick}
          />
        </AnchorLink>
        <AnchorLink href="#about" offset="-1">
          <Menu.Item
            as="a"
            name="about"
            active={activeItem === "about"}
            onClick={handleClick}
          />
        </AnchorLink>
        <AnchorLink href="#skills">
          <Menu.Item
            as="a"
            name="skills"
            active={activeItem === "skills"}
            onClick={handleClick}
          />
        </AnchorLink>

        <AnchorLink href="#projects">
          <Menu.Item
            as="a"
            name="projects"
            active={activeItem === "projects"}
            onClick={handleClick}
          />
        </AnchorLink>
        <Menu.Item
          as="a"
          name="resume"
          active={activeItem === "resume"}
          onClick={handleClick}
        />
      </Container>
    </StyledMenu>
  );
};

export default NavbarContainer;
