import styled, { css } from "styled-components";
import { spiralAnimation, colorChange } from "./animations";

export const Transition = styled.div`
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  transition-delay: 50ms;
  &:hover {
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
    transition-delay: 50ms;
  }
`;

export const Circle = styled.div`
  width: ${({ diameter }) => (diameter ? diameter : "50px")};
  height: ${({ diameter }) => (diameter ? diameter : "50px")};
  border-radius: 50%;
  position: absolute;
  top: ${({ top }) => (top ? top : "0px")};
  left: ${({ left }) => (left ? left : "0px")};
  background-color: ${({ color }) => (color ? color : "#fff")};
`;

export const StyledCircle = styled(Transition)`
  ${Circle}
  transition-property: width, background-color;
  animation: ${spiralAnimation} 20s 3s ease-in-out infinite alternate both;
  &:hover {
    background-color: #d495d5;
    transition-property: background-color;
  }
`;

export const SpiralCircle = styled(Circle)`
  animation: ${({ initialAngle, twist }) =>
        spiralAnimation(initialAngle, twist)}
      75s 0s ease-in-out both alternate infinite,
    ${({ color: initialColor, finalColor }) =>
        colorChange(initialColor, finalColor)}
      75s 0s ease-in-out both infinite;
`;
