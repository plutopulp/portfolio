import React from "react";
import PropTypes from "prop-types";
import { Grid, Button, Icon } from "semantic-ui-react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

const StyledButton = styled(Button)`
  transition: background 200ms 50ms;
  &.ui.button {
    background: #257795dd;
    color: #ffffff;
  }
  &.ui.button:hover {
    background: #257795ff;
  }
`;

const RotateIcon = styled.div`
  margin-left: 0.25em;
  display: inline-block;
  transform: rotateZ(0);
  transition: transform 600ms 50ms;
  ${StyledButton}:hover & {
    transform: rotateZ(360deg);
  }
`;

export const Buttons = ({ mobile }) => {
  return (
    <React.Fragment>
      <Grid.Column textAlign="center" floated="left" width={8}>
        <AnchorLink href="#skills">
          <StyledButton
            size={mobile ? "medium" : "huge"}
            style={{ marginRight: "0em" }}
          >
            Check Out My Skills
            <RotateIcon>
              <Icon name="down arrow" />
            </RotateIcon>
          </StyledButton>
        </AnchorLink>
      </Grid.Column>

      <Grid.Column textAlign="center" floated="right" width={6}>
        <AnchorLink href="#skills">
          <StyledButton
            size={mobile ? "medium" : "huge"}
            style={{ marginRight: "0em" }}
          >
            Check Out My Work
            <RotateIcon>
              <Icon name="down arrow" />
            </RotateIcon>
          </StyledButton>
        </AnchorLink>
      </Grid.Column>
    </React.Fragment>
  );
};

Buttons.propTypes = {
  mobile: PropTypes.bool,
};
