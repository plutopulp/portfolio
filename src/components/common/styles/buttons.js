import styled from "styled-components";
import { Button } from "semantic-ui-react";

import { opacityAnimation } from "./animations";
import { animationProps } from "./styleProps";

export const StyledButton = styled(Button)`
  &.ui.button {
    background: #257795cc;
    color: #fff;
    transition: background 200ms 50ms;
  }
  &.ui.button:hover {
    background: #257795ee;
  }
`;
export const ButtonWithAnimation = styled(Button)`
  opacity: 0;
  transition: background ${animationProps.durations.short}
    ${animationProps.durations.tiny};
  animation: ${opacityAnimation} ${animationProps.durations.long}
    ${animationProps.durations.long} forwards;
  &.ui.button:hover {
    background: ${({ bgColor }) => bgColor};
    color: ${({ color }) => color};
  }
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
