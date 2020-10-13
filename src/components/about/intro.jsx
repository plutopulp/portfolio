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
          I'm a full-stack developer based in Dublin, Ireland.
        </Paragraph>
        <Paragraph>
          I enjoy solving complex problems, developing my skills and
          collaborating with others. My focus is clean and re-useable code,
          while gradually gaining a deeper appreciation of software architecture
          and design patterns in general. On the other hand, the prospect of
          building meaningful tools for users and having a positive impact,
          maintains my focus to keep working hard.
        </Paragraph>
        <Paragraph>
          When I'm not coding, you will most likely find me down on the mats
          training Brazilian-Jiu-Jitsu, playing chess or making music.
        </Paragraph>
      </OpacityAndTranslateX>
    </Grid.Column>
  );
};

Intro.propTypes = {
  mobile: PropTypes.bool,
};
