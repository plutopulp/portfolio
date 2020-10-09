import React from "react";
import {
  Divider,
  Container,
  Button,
  Segment,
  Grid,
  Header,
  Image,
} from "semantic-ui-react";
import styled from "styled-components";

import { skillsContent } from "./skillsContent";

const SkillWrapper = styled.div`
  margin: 2em;
`;
const SkillTitle = styled.div`
  margin-top: 1em;
  font-weight: 600;
`;

export const Skills = () => (
  <Segment style={{ padding: "8em 0em" }} vertical>
    <Container>
      <SkillsGrid
        skillSets={[
          { title: "Backend", skills: skillsContent.backend },
          { title: "Frontend", skills: skillsContent.frontend },
        ]}
      />
      <Divider
        as="h4"
        className="header"
        horizontal
        style={{ margin: "3em 0em", textTransform: "uppercase" }}
      >
        <Image size="small" src="../../media/icons/diamond.svg" />
      </Divider>
      <SkillsGrid
        skillSets={[
          { title: "Languages", skills: skillsContent.languages },
          { title: "Other", skills: skillsContent.other },
        ]}
      />
    </Container>
  </Segment>
);

const SkillsGrid = ({ skillSets }) => (
  <Grid celled="internally" columns="equal" stackable>
    <Grid.Row textAlign="center">
      {skillSets.map((skillSet) => (
        <SkillsCell title={skillSet.title} skills={skillSet.skills} />
      ))}
    </Grid.Row>
  </Grid>
);

const SkillsCell = ({ title, skills }) => (
  <Grid.Column>
    <Header as="h3" style={{ fontSize: "2em" }}>
      {title}
    </Header>
    <Grid columns="equal" stackable>
      <Grid.Row centered>
        {skills.map((skill) => (
          <SkillWrapper>
            <Image
              size="tiny"
              centered
              src={`../media/icons/${skill.iconName}`}
            />
            <SkillTitle>{skill.title}</SkillTitle>
          </SkillWrapper>
        ))}
      </Grid.Row>
    </Grid>
  </Grid.Column>
);
