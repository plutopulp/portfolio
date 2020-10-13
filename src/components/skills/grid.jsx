import React from "react";
import PropTypes from "prop-types";
import { Grid } from "semantic-ui-react";
import { GridCell } from "./gridCell";

const SkillsGrid = ({ skillSets }) => {
  return (
    <Grid celled="internally" columns="equal" stackable>
      <Grid.Row textAlign="center">
        {skillSets.map((skillSet, index) => (
          <GridCell
            key={index}
            title={skillSet.title}
            skills={skillSet.skills}
            even={index % 2 === 0}
          />
        ))}
      </Grid.Row>
    </Grid>
  );
};

SkillsGrid.propTypes = {
  skillSets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { SkillsGrid as Grid };
