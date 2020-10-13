import React from "react";
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";
import styled from "styled-components";

import { Header } from "./header";
import { Intro } from "./intro";
import { Pic } from "./pic";
import { Buttons } from "./buttons";
import { HomeSegment } from "../common/styles/index";

const StyledSegment = styled(HomeSegment)`
  &.segment.vertical {
    background: #25779510;
  }
`;
const StyledGrid = styled(Grid)`
  &.ui.container {
    margin-top: 4em;
  }
`;

export const About = ({ mobile }) => {
  return (
    <React.Fragment>
      <StyledSegment vertical id="about" mobile={mobile}>
        <Header mobile={mobile} />
        <StyledGrid container stackable verticalAlign="middle">
          <Grid.Row>
            <Intro mobile={mobile} />
            <Pic mobile={mobile} />
          </Grid.Row>
          <Grid.Row style={{ marginTop: "6em" }}>
            <Buttons mobile={mobile} />
          </Grid.Row>
        </StyledGrid>
      </StyledSegment>
    </React.Fragment>
  );
};

About.propTypes = {
  mobile: PropTypes.bool.isRequired,
};
