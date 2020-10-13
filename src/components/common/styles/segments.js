import styled from "styled-components";
import { Segment } from "semantic-ui-react";

export const LandingSegment = styled(Segment)`
  text-align: center;
  padding: 1em 0em;
  min-height: ${(props) => props.height}px;
  position: relative;
  &.segment.vertical {
    background: #2f303a;
  }
`;
export const HomeSegment = styled(Segment)`
  &.segment.vertical {
    padding-top: ${({ mobile }) => (mobile ? 4 : 8)}em;
    padding-bottom: ${({ mobile }) => (mobile ? 8 : 12)}em;
  }
`;
