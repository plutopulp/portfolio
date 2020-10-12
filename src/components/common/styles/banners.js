import styled, { css } from "styled-components";
import { Segment } from "semantic-ui-react";

const commonBannerStyles = css`
  text-align: center;
  padding: 1em 0em;
  min-height: ${(props) => props.height}px;
  &.segment.vertical {
    background: #2f303a;
  }
`;

export const StyledDesktopBanner = styled(Segment)`
  ${commonBannerStyles};
  position: relative;
`;

export const StyledMobileBanner = styled(Segment)`
  ${commonBannerStyles};
`;
