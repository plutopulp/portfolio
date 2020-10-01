import React from "react";
import { Container } from "semantic-ui-react";
import { SpacerLg, StyledHeading, StyledSubHeading } from "../common/styles";

export const Heading = ({
  mobile,
  headingText,
  subHeadingText,
  actionButton,
}) => (
  <Container text>
    <SpacerLg mobile={mobile} />
    <StyledHeading mobile={mobile} as="h1" inverted>
      {headingText}
    </StyledHeading>

    <StyledSubHeading mobile={mobile} as="h2" inverted>
      {subHeadingText}
    </StyledSubHeading>
    {actionButton}
  </Container>
);
