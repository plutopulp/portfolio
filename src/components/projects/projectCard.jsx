import React from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";
import { WithHover } from "../common/withHover";

const ProjectCard = (props) => (
  <WithHover>
    <CardWithProps {...props} />
  </WithHover>
);

const CardWithProps = (props) => (
  <Card raised={props.hovered}>
    <Image src={props.img} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.title}</Card.Header>
      <Card.Meta>Project Meta</Card.Meta>
      <Card.Description>{props.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>First</Card.Content>
    <Card.Content extra>
      <Button inverted>
        <Icon name="github" size="big" color="black" />
      </Button>
    </Card.Content>
  </Card>
);

export { ProjectCard };
