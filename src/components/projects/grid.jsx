import React from "react";
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";
import { Tile } from "./tile/tile";

const ProjectGrid = () => {
  return (
    <Grid container columns={2} stackable>
      <Grid.Row textAlign="center">
        <Grid.Column>
          <Tile />
        </Grid.Column>

        <Grid.Column>
          <Tile />
        </Grid.Column>

        <Grid.Column>
          <Tile />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export { ProjectGrid as Grid };
