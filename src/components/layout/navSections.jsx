import React from "react";
import { useRefs } from "react-context-refs";
import { Container, Menu } from "semantic-ui-react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { useActiveRef } from "../../hooks/useActiveRef";
import { useToggle } from "../../hooks/useToggle";
import { Resume } from "../resume/resume";

// The sections of the SPA. For proper functioning of links,
// each section component should be wrapped in a div with an id
// matching the labels below.
// Refs to these divs should also be added to contextRefs
const sections = ["home", "about", "skills", "projects"];

export const NavSections = () => {
  let sectionRefs = useRefs().filter((ref) => ref.type === "section");
  // Sort refs according to sections
  sectionRefs = sectionRefs
    .slice()
    .sort(
      (a, b) => sections.indexOf(a.meta.name) - sections.indexOf(b.meta.name)
    );
  const activeRef = useActiveRef(sectionRefs, { offset: 20 });

  const [resume, toggleResume] = useToggle(false);
  return (
    <Container>
      {sections.map((section, index) => (
        <AnchorLink href={`#${section}`} offset="-1" key={index}>
          <Menu.Item as="a" name={section} active={index === activeRef} />
        </AnchorLink>
      ))}

      <Menu.Item as="a" name="resume" onClick={toggleResume} />
      <Resume open={resume} handleClose={toggleResume} />
    </Container>
  );
};
