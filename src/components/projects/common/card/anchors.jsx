import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Icon, Popup } from "semantic-ui-react";

const AnchorsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
const InnerWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-left: 0.5em;
`;
const ButtonWrapper = styled.div`
  display: inline-block;
  margin: 0 0 0 1em;
`;

const StyledIcon = styled(Icon)`
  &.icon {
    color: ${({ color }) => color};
  }
`;

const Anchor = ({ anchor }) => (
  <a href={anchor.href} target="_blank">
    <ButtonWrapper>
      <InnerWrapper>
        <Popup
          content={anchor.name}
          trigger={
            <span>
              <StyledIcon name={anchor.type} size="big" color="#333" />
            </span>
          }
        />
      </InnerWrapper>
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
