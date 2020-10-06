import styled from "styled-components";
import { Button } from "semantic-ui-react";

import { opacityAnimation } from "./animations";
import { animationProps } from "./styleProps";

export const ButtonWithAnimation = styled(Button)`
  opacity: 0;

  animation: ${opacityAnimation} ${animationProps.durations.med}
    ${animationProps.durations.long} forwards;
`;

export const RotateButtonChild = styled.div`
  margin-left: 0.25em;
  display: inline-block;
  transform: rotateZ(0);
  transition: transform ${animationProps.durations.short}
    ${animationProps.durations.tiny};
  ${ButtonWithAnimation}:hover & {
    transform: rotateZ(${(props) => props.angle});
  }
`;
