import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Icon } from "semantic-ui-react";
import { StyledButton } from "../../../common/styles/index";

const AnchorsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
const InnerWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-right: 1em;
`;
const ButtonWrapper = styled.div`
  display: inline-block;
  margin: 0 1em 1em 0;
`;

const Anchor = ({ anchor }) => (
  <a href={anchor.href} target="_blank">
    <ButtonWrapper>
      <StyledButton size="mini">
        <InnerWrapper>
          <IconSwitch type={anchor.type} />
          <div>{anchor.name}</div>
        </InnerWrapper>
      </StyledButton>
    </ButtonWrapper>
  </a>
);
Anchor.propTypes = {
  anchor: PropTypes.objectOf(PropTypes.string).isRequired,
};

export const Anchors = ({ anchors }) => (
  <AnchorsWrapper>
    {anchors
      .filter((anchor) => anchor.href)
      .map((anchor, index) => (
        <Anchor anchor={anchor} key={index} />
      ))}
  </AnchorsWrapper>
);

Anchors.propTypes = {
  anchors: PropTypes.arrayOf(Anchor.propTypes.anchor).isRequired,
};

const IconSwitch = ({ type }) => {
  switch (type) {
    case "github":
      return <Icon name="github" size="big" />;
    case "website":
      return <Icon name="globe" size="big" />;
    default:
      throw new Error(`Anchor type ${type} not recognized`);
  }
};

IconSwitch.propTypes = {
  type: PropTypes.string.isRequired,
};
