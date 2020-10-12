import React from "react";
import PropTypes from "prop-types";
import { Segment, Grid, Image, Button } from "semantic-ui-react";
import styled from "styled-components";

import { useScrollTrigger } from "../../hooks/useScrollTrigger";
import {
  BodyHeader,
  TranslateX,
  OpacityTransition,
  OpacityAndTranslateX,
} from "../common/styles/index";

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
  const [triggerHeader, headerRef] = useScrollTrigger(false);
  const [triggerIntro, introRef] = useScrollTrigger(false);
  const [triggerImage, imageRef] = useScrollTrigger(false);
  return (
    <React.Fragment>
      <StyledSegment vertical>
        <OpacityAndTranslateX
          trigger={triggerHeader}
          ref={headerRef}
          distance="-10em"
        >
          <BodyHeader as="h1" mobile={mobile}>
            About
          </BodyHeader>
        </OpacityAndTranslateX>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <OpacityAndTranslateX
                trigger={triggerIntro}
                ref={introRef}
                distance="-10em"
              >
                <Paragraph>
                  I'm a full-stack developer based in Dublin, Ireland.
                </Paragraph>
                <Paragraph>
                  I enjoy solving complex problems, developing my skills and
                  collaborating with others. My focus is clean and re-useable
                  code, while gradually gaining a deeper appreciation of
                  software architecture and design patterns in general. On the
                  other hand, the prospect of building meaningful tools for
                  users and having a positive impact, maintains my focus to keep
                  working hard.
                </Paragraph>
                <Paragraph>
                  When I'm not coding, you will most likely find me down on the
                  mats training Brazilian-Jiu-Jitsu, playing chess or making
                  music.
                </Paragraph>
              </OpacityAndTranslateX>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <OpacityAndTranslateX
                trigger={triggerImage}
                ref={imageRef}
                distance="10em"
              >
                <Image
                  circular
                  rounded
                  size="large"
                  src="../../media/HeadShot.jpg"
                />
              </OpacityAndTranslateX>
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

About.propTypes = {
  mobile: PropTypes.bool.isRequired,
};
