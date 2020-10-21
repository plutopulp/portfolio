import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Container, Icon } from "semantic-ui-react";
import AnchorLink from "react-anchor-link-smooth-scroll";
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
        a fullstack developer
      </SubHeaderWithAnimation>
      <AnchorLink href="#about" offset="-1">
        <ButtonWithAnimation
          inverted
          size={mobile ? "medium" : "huge"}
          style={{ marginRight: "0em" }}
          bgColor="#257795aa"
          color="#fff"
        >
          About Me
          <RotateButtonChild angle="90deg">
            <Icon name="right arrow" />
          </RotateButtonChild>
        </ButtonWithAnimation>
      </AnchorLink>
    </Container>
  </PlaceCenter>
);

Header.propTypes = {
  mobile: PropTypes.bool,
};
