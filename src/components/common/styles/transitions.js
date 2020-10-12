import styled, { css } from "styled-components";
import { animationProps } from "./styleProps";

export const TranslateX = css`
  transform: translateX(
    ${({ trigger, distance }) => (trigger ? "0" : distance)}
  );
  transition: transform ${({ time }) => time} ${({ delay }) => delay};
`;
export const OpacityTransition = css`
  opacity: ${({ trigger }) => (trigger ? 1 : 0)};
  transition: opacity ${({ time }) => time};
`;

export const OpacityAndTranslateX = styled.div`
  opacity: ${({ trigger }) => (trigger ? 1 : 0)};
  transform: translateX(
    ${({ trigger, distance }) => (trigger ? "0" : distance)}
  );
  transition: transform 0.5s ${({ delay }) => delay},
    opacity 1s ${({ delay }) => delay};
`;
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
