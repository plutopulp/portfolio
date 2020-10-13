import React from "react";
import { ProjectsBody } from "./body";
import { MainSegmentBlue } from "../common/styles/index";
import { Header } from "../common/headers";

export const Projects = ({ mobile }) => (
  <MainSegmentBlue id="projects" vertical mobile={mobile}>
    <Header title="PROJECTS" mobile={mobile} />
    <ProjectsBody />
  </MainSegmentBlue>
);
