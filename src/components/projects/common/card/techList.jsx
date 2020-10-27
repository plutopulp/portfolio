import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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
        width="82px"
        iconSize="32px"
        margin="1em 3em 1em 0"
        src={`../media/icons/${tech.icon}`}
      />
    ))}
  </TechListWrapper>
);

TechList.propTypes = {
  techs: PropTypes.array.isRequired,
  textColor: PropTypes.string,
};
