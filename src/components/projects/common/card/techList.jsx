import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Grid } from "semantic-ui-react";

import { TitledIcon } from "../../../common/icons";

const TechListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
`;
export const TechList = ({ techs, textColor }) => (
  <TechListWrapper>
    {techs.map((tech, index) => (
      <TitledIcon
        key={index}
        title={tech.title}
        textColor={textColor}
        direction="column"
        width="72px"
        iconSize="36px"
        margin="0 2em 0 0"
        src={`../media/icons/${tech.icon}`}
      />
    ))}
  </TechListWrapper>
);

TechList.propTypes = {
  techs: PropTypes.array.isRequired,
  textColor: PropTypes.string,
};
