import React from "react";
import PropTypes from "prop-types";
import { Divider, Container, Image } from "semantic-ui-react";
import styled from "styled-components";

import { Grid } from "./grid";
import { Header } from "../common/headers";

import { MainSegmentWhite } from "../common/styles/index";
import { skillsContent } from "./skillsContent";

const StyledContainer = styled(Container)`
  &.ui.container {
    margin-top: 4em;
  }
`;

export const Skills = ({ mobile }) => (
  <MainSegmentWhite vertical id="skills">
    <Header title="SKILLS" mobile={mobile} />
    <StyledContainer>
      <Grid
        skillSets={[
          { title: "Languages", skills: skillsContent.languages },
          { title: "Backend", skills: skillsContent.backend },
        ]}
      />
      <Divider className="header" horizontal>
        <Image size="small" src="../../media/icons/diamond.svg" />
      </Divider>

      <Grid
        skillSets={[
          { title: "Frontend", skills: skillsContent.frontend },
          { title: "Other", skills: skillsContent.other },
        ]}
      />
    </StyledContainer>
  </MainSegmentWhite>
);

Skills.propTypes = {
  mobile: PropTypes.bool,
};
