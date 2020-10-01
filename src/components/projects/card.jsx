import React from "react";
import styled from "styled-components";
import { Card, Image, Button, Icon } from "semantic-ui-react";
import { useToggle } from "../../hooks/useToggle";

const CardWrapper = styled.div`
  display: inline-block;
`;
const ProjectCardContainer = () => {
  const [hovered, handleToggle] = useToggle(false);

  return (
    <CardWrapper onMouseEnter={handleToggle} onMouseLeave={handleToggle}>
      <Card raised={hovered}>
        <Image src="../media/undraw.png" wrapped ui={false} />
        <Card.Content>
          <Card.Header>Project Name</Card.Header>
          <Card.Meta>Project Meta</Card.Meta>
          <Card.Description>Project Description</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button inverted>
            <Icon name="github" size="big" color="black" />
          </Button>
        </Card.Content>
      </Card>
    </CardWrapper>
  );
};

export { ProjectCardContainer as ProjectCard };
