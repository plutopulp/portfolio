import styled from "styled-components";
import { Segment } from "semantic-ui-react";

export const LandingSegment = styled(Segment)`
  text-align: center;
  min-height: ${(props) => props.height}px;
  position: relative;
  &.segment.vertical {
    background: #2f303a;
  }
`;
const MainSegment = styled(Segment)`
  &.segment.vertical {
    padding-top: ${({ mobile }) => (mobile ? 4 : 8)}em;
    padding-bottom: ${({ mobile }) => (mobile ? 8 : 12)}em;
  }
`;

export const MainSegmentBlue = styled(MainSegment)`
  &.segment.vertical {
    background: #25779510;
  }
`;

export const MainSegmentWhite = styled(MainSegment)`
  &.segment.vertical {
    background: #fff;
  }
`;
