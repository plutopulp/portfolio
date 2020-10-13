import React from "react";
import PropTypes from "prop-types";
import { Container } from "semantic-ui-react";

import {
  MainHeaderWithAnimation,
  SubHeaderWithAnimation,
} from "./styles/index";

export const Heading = ({
  mobile,
  headerText,
  subHeaderText,
  actionButton,
}) => (
  <Container text style={{ padding: "0em" }}>
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
