import styled, { css } from "styled-components";
import { Segment, Header } from "semantic-ui-react";

export const TileWrapper = styled.div`
  position: relative;
`;

export const StyledSegment = styled(Segment)`
  &.segment {
    margin-top: 0;
    opacity: ${({ hovered }) => (hovered ? 0 : 1)};
    transition: opacity 400ms 50ms;
  }
`;

export const Common = css`
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

export const StyledHeader = styled(Header)`
  ${Common};
  color: #333;
  font-weight: 700;
`;

export const StyledSubHeader = styled(Header)`
  ${Common};
  color: #4c4cd580;
  font-weight: 600;
`;

export const ButtonWrapper = styled.div`
  ${Common}
  top: 100%;
  height: 10%;
`;
