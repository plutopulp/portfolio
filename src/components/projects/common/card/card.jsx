import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Tree from "react-d3-tree";
import { Grid, Label, Image, Button, Icon } from "semantic-ui-react";

import { TechList } from "./techList";
import { DeviculumChart } from "../../deviculumChart/deviculumChart";
import { Anchors } from "./anchors";

const Wrapper = styled.div`
  margin: 6em 5%;
  color: #333;
`;
const MainTitle = styled.div`
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 0.5em;
`;

const SubTitle = styled.div`
  font-size: 1em;
  font-weight: 600;
  color: #777;
  padding-bottom: 0.75em;
  margin-bottom: 1.5em;
  border-bottom: 1px solid #999;
`;

const SecondaryTitle = styled.div`
  font-size: 1.5em;
  font-weight: 600;
  margin: 2em 0 1em 0;
`;
const ProjectCard = ({ project }) => {
  const {
    title,
    meta,
    description,
    anchors,
    technologies,
    learnings,
    implementationTree,
  } = project;

  return (
    <Wrapper>
      <MainTitle>{title}</MainTitle>
      <SubTitle>{meta.toUpperCase()}</SubTitle>
      <Grid columns={2}>
        <Grid.Column width={10}>{description}</Grid.Column>

        <Grid.Column width={6}>
          <Anchors anchors={anchors} />
        </Grid.Column>
      </Grid>
      <SecondaryTitle>Built With</SecondaryTitle>
      <TechList techs={technologies.backend} textColor="#257795aa" />
      <TechList techs={technologies.frontend} textColor="#AC2CACaa" />
    </Wrapper>
  );
};

const CardImage = ({ title, img }) =>
  title === "deviculum" ? <DeviculumChart /> : <Image src={img} />;

CardImage.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
};

export { ProjectCard as Card };
