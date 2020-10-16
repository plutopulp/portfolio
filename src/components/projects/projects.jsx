import React from "react";
import PropTypes from "prop-types";
import { Grid } from "./grid";
import { MainContainer, MainSegmentBlue } from "../common/styles/index";
import { Header } from "../common/headers";
import { Card } from "./common/card/card";
import { projectsContent } from "./content/allContent";

export const Projects = ({ mobile }) => (
  <MainSegmentBlue id="projects" vertical mobile={mobile}>
    <Header title="PROJECTS" mobile={mobile} />
    <MainContainer>
      <Grid />
      <Card project={projectsContent[0]} />
    </MainContainer>
  </MainSegmentBlue>
);

Projects.propTypes = {
  mobile: PropTypes.bool,
};
