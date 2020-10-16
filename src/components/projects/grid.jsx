import React from "react";
import { Grid } from "semantic-ui-react";
import { Tile } from "./common/tile";
import { projectsContent } from "./content/allContent";

const ProjectGrid = () => {
  return (
    <Grid container columns={2} stackable>
      <Grid.Row columns="equal" textAlign="center">
        {projectsContent.map((project, index) => (
          <Grid.Column>
            <Tile project={project} key={index} />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
};

export { ProjectGrid as Grid };
