import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Icon } from "semantic-ui-react";

const AnchorsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
const AnchorWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-right: 1em;
`;

export const Anchors = ({ anchors }) => (
  <AnchorsWrapper>
    {anchors
      .filter((anchor) => anchor.href)
      .map((anchor, index) => (
        <Anchor anchor={anchor} key={index} />
      ))}
  </AnchorsWrapper>
);

const Anchor = ({ anchor }) => (
  <AnchorWrapper>
    <IconSwitch type={anchor.type} />
    <div>{anchor.name}</div>
  </AnchorWrapper>
);

Anchor.propTypes = {
  anchor: PropTypes.objectOf(PropTypes.string).isRequired,
};

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
