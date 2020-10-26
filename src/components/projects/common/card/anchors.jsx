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
  margin-left: 1em;
`;
const ButtonWrapper = styled.div`
  display: inline-block;
  margin: 0 0 1em 1em;
`;

const Anchor = ({ anchor }) => (
  <a href={anchor.href} target="_blank">
    <ButtonWrapper>
      <InnerWrapper>
        <Popup
          content={anchor.name}
          trigger={<Icon name={anchor.type} size="big" />}
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
