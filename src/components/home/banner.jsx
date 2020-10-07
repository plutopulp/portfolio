import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";
import {
  MainHeaderWithAnimation,
  SubHeaderWithAnimation,
} from "../common/styles/index";

import { ButtonWithAnimation, RotateButtonChild } from "../common/styles/index";

const PlaceCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Banner = ({ mobile }) => (
  <PlaceCenter>
    <Container text style={{ padding: "0em" }}>
      <MainHeaderWithAnimation mobile={mobile} as="h1" inverted>
        Hello, I'm Yvan
      </MainHeaderWithAnimation>

      <SubHeaderWithAnimation mobile={mobile} as="h2" inverted>
        a full-stack developer
      </SubHeaderWithAnimation>
      <ButtonWithAnimation primary size="huge" style={{ marginRight: "0em" }}>
        About Me
        <RotateButtonChild angle="90deg">
          <Icon name="right arrow" />
        </RotateButtonChild>
      </ButtonWithAnimation>
    </Container>
  </PlaceCenter>
);

Banner.propTypes = {
  mobile: PropTypes.bool,
};
