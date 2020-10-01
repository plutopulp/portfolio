import React from "react";
import { Heading } from "../common/heading";
import { Button, Icon } from "semantic-ui-react";

export const ProjectsHeading = ({ mobile }) => (
  <Heading
    mobile={mobile}
    headingText="Yvan Buggy"
    subHeadingText="Software Developer"
    actionButton={
      <Button primary size="huge">
        Get Started
        <Icon name="right arrow" />
      </Button>
    }
  />
);
