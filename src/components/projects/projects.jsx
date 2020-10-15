import React from "react";
import { Image } from "semantic-ui-react";
import { Grid } from "./grid";
import { MainContainer, MainSegmentBlue } from "../common/styles/index";
import { Header } from "../common/headers";

export const Projects = ({ mobile }) => (
  <MainSegmentBlue id="projects" vertical mobile={mobile}>
    <Header title="PROJECTS" mobile={mobile} />
    <MainContainer>
      <Grid />
    </MainContainer>
  </MainSegmentBlue>
);
