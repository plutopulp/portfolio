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

const NameColor = styled.span`
  color: #ac2cac;
`;
export const Header = ({ mobile }) => (
  <PlaceCenter>
    <Container text style={{ padding: "0em" }}>
      <MainHeaderWithAnimation mobile={mobile} as="h1" inverted>
        Hello, I'm <NameColor>Yvan</NameColor>
      </MainHeaderWithAnimation>

      <SubHeaderWithAnimation mobile={mobile} as="h2" inverted>
        a full-stack developer
      </SubHeaderWithAnimation>
      <ButtonWithAnimation
        active={false}
        inverted
        size={mobile ? "medium" : "huge"}
        style={{ marginRight: "0em" }}
      >
        About Me
        <RotateButtonChild angle="90deg">
          <Icon name="right arrow" />
        </RotateButtonChild>
      </ButtonWithAnimation>
    </Container>
  </PlaceCenter>
);

Header.propTypes = {
  mobile: PropTypes.bool,
};
