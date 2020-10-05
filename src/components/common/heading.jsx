import React from "react";
import { Container } from "semantic-ui-react";

import {
  SpacerLg,
  StyledHeading,
  StyledSubHeading,
  StyledCircle,
} from "./styles/styles";

export const Heading = ({
  mobile,
  headingText,
  subHeadingText,
  actionButton,
}) => (
  <Container text>
    <SpacerLg mobile={mobile} />
    <StyledCircle color="#6A9DBB" radius="200px" />

    <StyledHeading mobile={mobile} as="h1" inverted>
      {headingText}
    </StyledHeading>

    <StyledSubHeading mobile={mobile} as="h2" inverted>
      {subHeadingText}
    </StyledSubHeading>
    {actionButton}
  </Container>
);
