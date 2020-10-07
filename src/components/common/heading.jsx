import React from "react";
import PropTypes from "prop-types";
import { Container } from "semantic-ui-react";

import {
  MainHeader,
  SubHeader,
  MainHeaderWithAnimation,
  SubHeaderWithAnimation,
  MovingCircle,
} from "./styles/index";

const initialAngles = ["0deg", "120deg", "240deg"];
const twists = ["360deg", "720deg", "1080deg"];
const circleProps = [];
initialAngles.forEach((angle) => {
  twists.forEach((twist) => circleProps.push({ angle, twist }));
});

export const Heading = ({
  mobile,
  headerText,
  subHeaderText,
  actionButton,
}) => (
  <Container text style={{ padding: "0em" }}>
    {circleProps.map((prop) => (
      <MovingCircle
        initialAngle={prop.angle}
        twist={prop.twist}
        diameter="1vw"
        color="white"
        left="50%"
        top="40%"
      />
    ))}

    <MainHeaderWithAnimation mobile={mobile} as="h1" inverted>
      {headerText}
    </MainHeaderWithAnimation>

    <SubHeaderWithAnimation mobile={mobile} as="h2" inverted>
      {subHeaderText}
    </SubHeaderWithAnimation>
    {actionButton}
  </Container>
);

Heading.propTypes = {
  mobile: PropTypes.bool,
  headerText: PropTypes.string,
  subHeaderText: PropTypes.string,
  actionButton: PropTypes.node,
};
