import React from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";
import styled from "styled-components";
import Tree from "react-d3-tree";

import { Grid, Label, Image, Button, Icon } from "semantic-ui-react";
import { DeviculumChart } from "../../deviculumChart/deviculumChart";
import { Anchors } from "./anchors";

const CardWrapper = styled.div`
  margin: 6em 5%;
  color: #333;
`;
const CardTitle = styled.div`
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 0.5em;
`;

const CardSubTitle = styled.div`
  font-size: 1em;
  font-weight: 600;
  color: #777;
  padding-bottom: 0.75em;
  margin-bottom: 1.5em;
  border-bottom: 1px solid #999;
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
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardSubTitle>{meta.toUpperCase()}</CardSubTitle>
      <Grid columns={2}>
        <Grid.Column width={10}>{description}</Grid.Column>

        <Grid.Column width={6}>
          <Anchors anchors={anchors} />
        </Grid.Column>
      </Grid>
    </CardWrapper>
  );
};

const CardImage = ({ title, img }) =>
  title === "deviculum" ? <DeviculumChart /> : <Image src={img} />;

CardImage.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
};

const TechStack = ({ techs, color }) => {
  return (
    <p>
      <Label.Group tag size="small" color={color} inverted>
        {" "}
        {techs.map((tech) => (
          <Label key={uuid()} as="a">
            {tech}
          </Label>
        ))}{" "}
      </Label.Group>
    </p>
  );
};

TechStack.propTypes = {
  techs: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.string.isRequired,
};

export { ProjectCard as Card };
