import React from "react";
import { Container, Menu, Button } from "semantic-ui-react";

export const Navbar = ({ fixed }) => (
  <Menu
    fixed={fixed ? "top" : null}
    inverted={!fixed}
    pointing={!fixed}
    secondary={!fixed}
    size="large"
  >
    <Container>
      <Menu.Item as="a" active>
        Home
      </Menu.Item>
      <Menu.Item as="a">Projects</Menu.Item>
      <Menu.Item as="a">Snippets</Menu.Item>
      <Menu.Item as="a">Resume</Menu.Item>
      <Menu.Item position="right">
        <Button as="a" inverted={!fixed}>
          Log in
        </Button>
        <Button
          as="a"
          inverted={!fixed}
          primary={fixed}
          style={{ marginLeft: "0.5em" }}
        >
          Sign Up
        </Button>
      </Menu.Item>
    </Container>
  </Menu>
);
