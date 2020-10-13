import React from "react";
import PropTypes from "prop-types";
import { Grid, Header, Image } from "semantic-ui-react";
import styled from "styled-components";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";

import { OpacityAndTranslateX } from "../common/styles/index";

const SkillWrapper = styled.div`
  margin: 2em;
`;
const SkillTitle = styled.div`
  margin-top: 1em;
  font-weight: 600;
`;

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
                <SkillWrapper>
                  <Image
                    size="tiny"
                    centered
                    src={`../media/icons/${skill.iconName}`}
                  />
                  <SkillTitle>{skill.title}</SkillTitle>
                </SkillWrapper>
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
