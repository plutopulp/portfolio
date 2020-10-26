import React from "react";
import { useRefs } from "react-context-refs";
import { Container, Menu } from "semantic-ui-react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { useActiveRef } from "../../hooks/useActiveRef";
import { NavbarMenu } from "./styles";

// The sections of the SPA. For proper functioning of links,
// each section component should be wrapped in a div with an id
// matching the labels below.
// Refs to these divs should also be added to contextRefs
const orderedSections = ["home", "about", "skills", "projects"];

const NavbarContainer = ({ fixed }) => {
  let sectionRefs = useRefs().filter((ref) => ref.type === "section");
  // Sort refs according to orderedSections
  sectionRefs = sectionRefs
    .slice()
    .sort(
      (a, b) =>
        orderedSections.indexOf(a.meta.name) -
        orderedSections.indexOf(b.meta.name)
    );
  const activeRefIndex = useActiveRef(sectionRefs, { offset: 20 });

  return (
    <Navbar
      fixed={fixed}
      sections={orderedSections}
      activeIndex={activeRefIndex}
    />
  );
};

const Navbar = ({ fixed, sections, activeIndex }) => {
  return (
    <NavbarMenu
      fixed={fixed ? "top" : null}
      inverted
      pointing={true}
      secondary={true}
      size="large"
    >
      <Container>
        {sections.map((section, index) => (
          <AnchorLink href={`#${section}`} offset="-1" key={index}>
            <Menu.Item as="a" name={section} active={index === activeIndex} />
          </AnchorLink>
        ))}

        <Menu.Item as="a" name="resume" />
      </Container>
    </NavbarMenu>
  );
};

export default NavbarContainer;
