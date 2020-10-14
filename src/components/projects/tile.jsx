import React from "react";
import styled, { css } from "styled-components";
import { Segment, Header, Button } from "semantic-ui-react";
import { DeviculumChart } from "./deviculumChart/deviculumChart";
import { useHover } from "../../hooks/useHover";

const TileWrapper = styled.div`
  position: relative;
`;

const StyledSegment = styled(Segment)`
  &.segment {
    margin-top: 0;
    opacity: ${({ hovered }) => (hovered ? 0 : 1)};
    transition: opacity 400ms 50ms;
  }
`;

const Common = css`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  opacity: ${({ hovered }) => (hovered ? 1 : 0)};
  transform: translateY(
    ${({ hovered, initialY, finalY }) => (hovered ? finalY : initialY)}
  );
  transition: opacity 400ms 50ms, transform 400ms 50ms;
`;

const StyledHeader = styled(Header)`
  ${Common};
  color: #333;
  font-weight: 700;
`;

const StyledSubHeader = styled(Header)`
  ${Common};
  color: #4c4cd580;
  font-weight: 600;
`;

const ButtonWrapper = styled.div`
  ${Common}
  top: 100%;
  height: 10%;
`;

const StyledButton = styled(Button)`
  &.ui.button {
    background: #257795cc;
    color: #fff;
    transition: background 200ms 50ms;
  }
  &.ui.button:hover {
    background: #257795ee;
  }
`;

export const Tile = ({ image }) => {
  const [hovered, tileRef] = useHover(false);
  return (
    <TileWrapper ref={tileRef} hovered={hovered}>
      <StyledHeader as="h2" hovered={hovered} initialY="0%" finalY="30%">
        Deviculum
      </StyledHeader>
      <StyledSubHeader as="h3" hovered={hovered} initialY="0%" finalY="40%">
        Django - JavaScript
      </StyledSubHeader>
      <StyledSegment hovered={hovered}>
        <DeviculumChart />
      </StyledSegment>
      <ButtonWrapper hovered={hovered} initialy="0%" finalY="-500%">
        <StyledButton onClick={() => console.log("hi")}>
          Learn More
        </StyledButton>
      </ButtonWrapper>
    </TileWrapper>
  );
};
