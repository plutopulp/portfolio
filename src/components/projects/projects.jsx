import React from "react";
import PropTypes from "prop-types";
import { useContextRef } from "react-context-refs";

import { Grid } from "./grid";
import { MainContainer, MainSegmentBlue } from "../common/styles/index";
import { Header } from "../common/headers";

export const Projects = ({ mobile }) => {
  const ref = useContextRef("section", { name: "projects" });
  return (
    <div id="projects" ref={ref}>
      <MainSegmentBlue vertical mobile={mobile}>
        <Header title="PROJECTS" mobile={mobile} />
        <MainContainer>
          <Grid />
        </MainContainer>
      </MainSegmentBlue>
    </div>
  );
};

Projects.propTypes = {
  mobile: PropTypes.bool,
};
