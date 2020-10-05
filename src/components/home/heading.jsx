import React from "react";
import { Heading } from "../common/heading";
import { Icon } from "semantic-ui-react";

import { ButtonWithAnimation, RotateButtonChild } from "../common/styles/index";

export const HomeHeading = ({ mobile }) => (
  <Heading
    mobile={mobile}
    headerText="Yvan Buggy"
    subHeaderText="Software Developer"
    actionButton={
      <ButtonWithAnimation primary size="huge">
        About Me
        <RotateButtonChild angle="90deg">
          <Icon name="right arrow" />
        </RotateButtonChild>
      </ButtonWithAnimation>
    }
  />
);
