import React from "react";
import styled from "styled-components";
import { Segment, Header } from "semantic-ui-react";
import { DeviculumChart } from "./deviculumChart/deviculumChart";
import { useHover } from "../../hooks/useHover";

const TileWrapper = styled.div``;

const StyledSegment = styled(Segment)`
  &.segment {
    opacity: ${({ hovered }) => (hovered ? 0 : 1)};
    transition: opacity 400ms 50ms;
  }
`;

const StyledHeader = styled(Header)`
    color: #333;
    font-weight: 700;
    opacity: ${({ hovered }) => (hovered ? 1 : 0)};
    transform: translateY(${({ hovered }) => (hovered ? 5 : -2)}em);
    transition: opacity 400ms 50ms, transform 400ms 50ms;
  }
`;

const StyledSubHeader = styled(Header)`
  color: #4c4cd580;
  font-weight: 600;
  opacity: ${({ hovered }) => (hovered ? 1 : 0)};
  transform: translateY(${({ hovered }) => (hovered ? 5 : -2)}em);
  transition: opacity 400ms 50ms, transform 400ms 50ms;
`;

export const Tile = ({ image }) => {
  const [hovered, tileRef] = useHover(false);
  return (
    <TileWrapper ref={tileRef} hovered={hovered}>
      <StyledHeader as="h2" hovered={hovered}>
        Deviculum
      </StyledHeader>
      <StyledSubHeader as="h3" hovered={hovered}>
        Django - JavaScript
      </StyledSubHeader>
      <StyledSegment hovered={hovered}>
        <DeviculumChart />
      </StyledSegment>
    </TileWrapper>
  );
};
