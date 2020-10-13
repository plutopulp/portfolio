import React from "react";
import { Segment } from "semantic-ui-react";
import { DeviculumChart } from "./deviculumChart/deviculumChart";

export const Tile = ({ image }) => {
  return (
    <Segment>
      <DeviculumChart />
    </Segment>
  );
};
