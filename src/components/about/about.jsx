import React from "react";
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";
import styled from "styled-components";

import { Header } from "../common/headers";
import { Intro } from "./intro";
import { Pic } from "./pic";
import { Buttons } from "./buttons";
import { MainSegmentBlue } from "../common/styles/index";

const StyledGrid = styled(Grid)`
  &.ui.container {
    margin-top: 4em;
  }
`;

export const About = ({ mobile }) => {
  return (
    <MainSegmentBlue vertical id="about" mobile={mobile}>
      <Header title="ABOUT" mobile={mobile} />
      <StyledGrid container stackable verticalAlign="middle">
        <Grid.Row>
          <Intro mobile={mobile} />
          <Pic mobile={mobile} />
        </Grid.Row>
        <Grid.Row style={{ marginTop: "6em" }}>
          <Buttons mobile={mobile} />
        </Grid.Row>
      </StyledGrid>
    </MainSegmentBlue>
  );
};

About.propTypes = {
  mobile: PropTypes.bool.isRequired,
};
