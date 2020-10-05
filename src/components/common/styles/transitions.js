import styled from "styled-components";
import { animationProps } from "./styleProps";

// Does not work - Doesn't seem to accept a parent as prop
// Try to figure out as it would be nice generating effects
// independent of parent
export const RotateChildOnHover = ({ parent, angle }) => styled.div`
  margin-left: 0.25em;
  display: inline-block;
  transform: rotateZ(0);
  transition-property: transform;
  transition-duration: ${animationProps.durations.short};
  ${parent}:hover & {
    transform: rotateZ(${(props) => props.angle});
  }
`;
