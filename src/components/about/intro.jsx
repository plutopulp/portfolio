import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Grid } from "semantic-ui-react";

import { useScrollTrigger } from "../../hooks/useScrollTrigger";
import { OpacityAndTranslateX } from "../common/styles/index";

const Paragraph = styled.p`
  font-size: 1.33em;
`;

export const Intro = ({ mobile }) => {
  const [triggerIntro, introRef] = useScrollTrigger(false);
  return (
    <Grid.Column width={8}>
      <OpacityAndTranslateX
        trigger={triggerIntro}
        ref={introRef}
        distance="-10em"
      >
        <Paragraph>
          I'm a Franco-Irish fullstack developer with experience in common
          modern frameworks and libraries such as Django and ReactJS.
        </Paragraph>
        <Paragraph>
          I enjoy finding simple solutions to complex problems and writing
          clean, re-useable code. My aim is to build meaningful tools for users
          and having a positive impact. I am always looking to further develop
          my skills and collaborate with others.
        </Paragraph>
        <Paragraph>
          When I'm not coding, you will most likely find me down on the mats
          training Brazilian-Jiu-Jitsu, playing chess or making music. I am
          currently working on a BJJ mind-mapping fullstack application!
        </Paragraph>
      </OpacityAndTranslateX>
    </Grid.Column>
  );
};

Intro.propTypes = {
  mobile: PropTypes.bool,
};
