import React from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";
import styled from "styled-components";

import { Card, Label, Image, Button, Icon } from "semantic-ui-react";
import { DeviculumChart } from "../deviculumChart/deviculumChart";

const StyledCard = styled(Card)`
  &.ui.card {
    margin-top: 6em;
    border-radius: 0;
    border: solid black 0px;
  }
`;
const ProjectCard = ({ project }) => {
  const { title, description, technologies, learnings } = project;

  return (
    <StyledCard fluid>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Card.Meta>
          <h4>Tech Stack</h4>
          <TechStack techs={technologies.backend} color="brown" />
          <TechStack techs={technologies.frontend} color="blue" />
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>{learnings.join(", ")}</Card.Content>
      <Card.Content extra>
        <Button inverted>
          <Icon name="github" size="big" color="black" />
        </Button>
      </Card.Content>
    </StyledCard>
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
