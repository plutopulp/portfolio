import styled from "styled-components";
import { Button } from "semantic-ui-react";

import { buttonAnimation } from "./animations";
import { animationProps } from "./styleProps";

export const ButtonWithAnimation = styled(Button)`
  opacity: 0;
  animation: ${buttonAnimation} ${animationProps.durations.med}
    ${animationProps.durations.long} forwards;
`;
