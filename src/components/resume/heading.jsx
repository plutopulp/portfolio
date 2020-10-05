import React from "react";
import { Heading } from "../common/heading";
import { Button, Icon } from "semantic-ui-react";

export const ResumeHeading = ({ mobile }) => (
  <Heading
    mobile={mobile}
    headerText="Yvan Buggy"
    subHeaderText="Software Developer"
    actionButton={
      <Button primary size="huge">
        Get Started
        <Icon name="right arrow" />
      </Button>
    }
  />
);
