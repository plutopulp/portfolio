import React from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";
import styled from "styled-components";

import { Card, Label, Image, Button, Icon } from "semantic-ui-react";

import { WithHover } from "../common/withHover";
import { DeviculumChart } from "./deviculumChart/deviculumChart";

const CardWrapper = styled.div`
  width: 30em;
  margin: ;
`;
const ProjectCard = (props) => (
  <WithHover>
    <CardWithProps {...props} />
  </WithHover>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  meta: PropTypes.string,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
    .isRequired,
  learnings: PropTypes.arrayOf(PropTypes.string).isRequired,
  urls: PropTypes.object.isRequired,
  img: PropTypes.string.isRequired,
};

const CardWithProps = (props) => (
  <CardWrapper>
    <Card raised={props.hovered} fluid>
      <CardImage title={props.title} img={props.img} />
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Description>{props.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Card.Meta>
          <TechStack
            title="Backend Stack"
            techs={props.technologies.backend}
            color="brown"
          />
          <TechStack
            title="Frontend Stack"
            techs={props.technologies.frontend}
            color="blue"
          />
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>{props.learnings.join(", ")}</Card.Content>
      <Card.Content extra>
        <Button inverted>
          <Icon name="github" size="big" color="black" />
        </Button>
      </Card.Content>
    </Card>
  </CardWrapper>
);

CardWithProps.propTypes = {
  ...ProjectCard.propTypes,
  hovered: PropTypes.bool,
};

const CardImage = ({ title, img }) =>
  title === "deviculum" ? <DeviculumChart /> : <Image src={img} />;

CardImage.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
};

const TechStack = ({ title, techs, color }) => {
  return (
    <p>
      {title}
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
  title: PropTypes.string.isRequired,
  techs: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.string.isRequired,
};

export { ProjectCard };
