import React from "react";
import PropTypes from "prop-types";
import { Grid, Header } from "semantic-ui-react";

import { useScrollTrigger } from "../../hooks/useScrollTrigger";
import { OpacityAndTranslateX } from "../common/styles/index";
import { TitledIcon } from "../common/icons";

export const GridCell = ({ title, skills, even }) => {
  const [cellTrigger, cellRef] = useScrollTrigger(false);
  return (
    <Grid.Column>
      <Header as="h3" style={{ fontSize: "2em" }}>
        {title}
      </Header>

      <div ref={cellRef}>
        <Grid columns="equal" stackable>
          <Grid.Row centered>
            {skills.map((skill, index) => (
              <OpacityAndTranslateX
                key={index}
                distance={even ? "-10em" : "10em"}
                delay={`${index * 200}ms`}
                trigger={cellTrigger}
              >
                <TitledIcon
                  key={index}
                  title={skill.title}
                  textColor="#333"
                  direction="column"
                  width="100px"
                  iconSize="72px"
                  margin="2em"
                  src={`../media/icons/${skill.iconName}`}
                />
              </OpacityAndTranslateX>
            ))}
          </Grid.Row>
        </Grid>
      </div>
    </Grid.Column>
  );
};
GridCell.propTypes = {
  title: PropTypes.string.isRequired,
  even: PropTypes.bool.isRequired,
  skills: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
