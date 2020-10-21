import React from "react";
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";
import { useContextRef } from "react-context-refs";

import { Header } from "../common/headers";
import { Intro } from "./intro";
import { Pic } from "./pic";
import { Buttons } from "./buttons";
import { MainContainer, MainSegmentBlue } from "../common/styles/index";

export const About = ({ mobile }) => {
  const ref = useContextRef("section", { name: "about" });
  return (
    <div ref={ref} id="about">
      <MainSegmentBlue vertical mobile={mobile}>
        <Header title="ABOUT" mobile={mobile} />
        <MainContainer>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Intro mobile={mobile} />
              <Pic mobile={mobile} />
            </Grid.Row>
            <Grid.Row style={{ marginTop: "6em" }}>
              <Buttons mobile={mobile} />
            </Grid.Row>
          </Grid>
        </MainContainer>
      </MainSegmentBlue>
    </div>
  );
};

About.propTypes = {
  mobile: PropTypes.bool.isRequired,
};
