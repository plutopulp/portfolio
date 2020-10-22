import React from "react";
import styled from "styled-components";
import { useRefs } from "react-context-refs";
import { Container, Menu } from "semantic-ui-react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import _ from "lodash";

import { useScrollPosition } from "../../hooks/useScrollPosition";
import { getPositionOfLineAndCharacter } from "typescript";

const StyledMenu = styled(Menu)`
  &.ui.secondary.inverted.pointing.menu {
    margin: 0;
    border-style: none;
  }
  &.ui.menu {
    background-color: #2f303a;
  }
`;

// The sections of the SPA. Have a name, position relative to scroll position,
// and active if scroll position within the section.
// For proper functioning (of links, active items etc..), each section component should be
// wrapped in a div with an id of #name
const initialSections = ["home", "about", "skills", "projects"].map(
  (section) => {
    return { name: section, position: { top: 0, bottom: 0 }, active: false };
  }
);

const NavbarContainer = ({ fixed }) => {
  const [sections, setSections] = React.useState(initialSections);
  const scrollPosition = useScrollPosition();
  const sectionRefs = useRefs().filter((ref) => ref.type === "section");

  // Update active section when section positions change
  // Want it to be instant
  React.useLayoutEffect(() => {
    const updateActiveSection = () => {
      const activeIndex = sections.findIndex(
        (section) => section.position.bottom >= 20
      );
      setSections(
        sections.map((section, index) => {
          return index === activeIndex
            ? { ...section, active: true }
            : { ...section, active: false };
        })
      );
    };
    updateActiveSection();
  }, [JSON.stringify(sections)]);

  React.useLayoutEffect(() => {
    const topPosition = (element) => element.getBoundingClientRect().top;
    const bottomPosition = (element) => element.getBoundingClientRect().bottom;

    const getPosition = (ref) => {
      return {
        top: topPosition(ref.current),
        bottom: bottomPosition(ref.current),
      };
    };
    const findMatchingSection = (ref) =>
      sections.findIndex((section) => section.name === ref.meta.name);

    const updateSectionPositions = () => {
      // Updates the top and bottom positions of each section relative to
      // the scroll position
      const newSections = sections.map((section) => {
        return { ...section };
      });
      sectionRefs.forEach((ref) => {
        const targetIndex = findMatchingSection(ref);
        newSections[targetIndex].position = getPosition(ref);
      });
      setSections(newSections);
    };
    if (sectionRefs.length) updateSectionPositions();
  }, [sectionRefs.length, scrollPosition]);

  return (
    <Navbar
      fixed={fixed}
      sections={sections.map((section) => {
        return _.pick(section, ["name", "active"]);
      })}
    />
  );
};

const Navbar = ({ fixed, sections }) => {
  return (
    <StyledMenu
      fixed={fixed ? "top" : null}
      inverted
      pointing={!fixed}
      secondary={!fixed}
      size="large"
    >
      <Container>
        {sections.map((section) => (
          <AnchorLink href={`#${section.name}`} offset="-1">
            <Menu.Item as="a" name={section.name} active={section.active} />
          </AnchorLink>
        ))}

        <Menu.Item as="a" name="resume" />
      </Container>
    </StyledMenu>
  );
};

export default NavbarContainer;
