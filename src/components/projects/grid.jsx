import React from "react";
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";
import { Tile } from "./project/tile";
import { projectsContent } from "./content/allContent";

const ProjectGrid = () => {
  return (
    <Grid container columns={2} stackable>
      <Grid.Row columns="equal" textAlign="center">
        {projectsContent.map((project) => (
          <Grid.Column>
            <Tile project={project} />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
};

export { ProjectGrid as Grid };
