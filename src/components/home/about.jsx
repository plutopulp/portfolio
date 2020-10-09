import React from "react";

import { Segment, Grid, Image, Button } from "semantic-ui-react";
import styled from "styled-components";

import { useScrollTrigger } from "../../hooks/useScrollTrigger";
import { BodyHeader } from "../common/styles/index";

const Paragraph = styled.p`
  font-size: 1.33em;
`;
const StyledSegment = styled(Segment)`
  &.segment.vertical {
    padding: 8em 0em;
    margin-bottom: 4em;
    background: #25779510;
  }
`;

export const About = ({ mobile }) => {
  const { showElement, elementRef } = useScrollTrigger(false);
  return (
    <React.Fragment>
      <StyledSegment vertical>
        <BodyHeader
          as="h1"
          mobile={mobile}
          animate={showElement}
          ref={elementRef}
        >
          About
        </BodyHeader>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Paragraph>
                I'm a full-stack developer based in Dublin, Ireland. I first
                encountered programming during my PhD in theoretical physics,
                where I needed to simulate quantum systems I was researching. I
                quickly realised I was hooked and haven't looked back since!
              </Paragraph>
              <Paragraph>
                I enjoy solving complex problems, learning new skills and
                collaborating with others. I am striving to write increasingly
                clean and re-useable code, while gradually gaining a deeper
                appreciation of software architecture and design patterns in
                general. On the other hand, the prospect of building meaningful
                tools for users and having a positive impact, maintains my focus
                to keep working hard.
              </Paragraph>
              <Paragraph>
                When I'm not coding, you will most likely find me down on the
                mats training Brazilian-Jiu-Jitsu, playing chess or making
                music.
              </Paragraph>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image
                circular
                rounded
                size="large"
                src="../../media/HeadShot.jpg"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center" floated="left" width={8}>
              <Button size="huge">Check Out My Skills</Button>
            </Grid.Column>

            <Grid.Column textAlign="center" floated="right" width={6}>
              <Button size="huge">Check Out My Work</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </StyledSegment>
    </React.Fragment>
  );
};
