import React from "react";
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
        <AnchorLink href="#landing">
          <Menu.Item
            as="a"
            name="home"
            active={activeItem === "home"}
            onClick={handleClick}
          />
        </AnchorLink>
        <AnchorLink href="#about">
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
    </Menu>
  );
};

export default NavbarContainer;
