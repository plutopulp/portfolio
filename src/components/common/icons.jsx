import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "column")};
  justify-content: start;
  align-items: center;
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
`;
const StyledTitle = styled.div`
  font-weight: 600;
  color: ${({ color }) => (color ? color : "#333")};
`;

export const TitledIcon = ({
  title,
  textColor,
  src,
  width,
  iconSize,
  direction,
  margin,
}) => (
  <Wrapper margin={margin} direction={direction} width={width}>
    <div>
      <img src={src} width={iconSize} height={iconSize} alt={`${title} icon`} />
    </div>
    <StyledTitle color={textColor}>{title}</StyledTitle>
  </Wrapper>
);
