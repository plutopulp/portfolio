import styled, { css } from "styled-components";
import { Icon } from "semantic-ui-react";

const IconCSS = css`
  margin: 0 0.1em 0 0.5em;
  padding: 0;
`;
const MutedCSS = css`
  color: #bbb;
`;
const MagentaCSS = css`
  color: #ac2cac;
`;
export const Muted = styled.span`
  ${MutedCSS}
`;
export const Magenta = styled.span`
  ${MagentaCSS};
`;

export const StyledCopyrightIcon = styled(Icon)`
  &.icon {
    ${IconCSS};
    ${MagentaCSS};
  }
`;
export const StyledGithubIcon = styled(Icon)`
  &.icon {
    ${IconCSS};
    ${MutedCSS};
  }
`;
export const FooterWrapper = styled.div`
  background: #2f303a;
  height: 10vh;
`;
