import { keyframes } from "styled-components";
import { animationProps } from "./styleProps";

export const headerAnimation = keyframes`
from {transform: translateY(0)}
to {transform: translateY(${animationProps.headerDrift})}
`;

export const bodyAnimation = keyframes`
from {transform: translateX(0)}
from {transform: translateX(${animationProps.bodyDrift})}
`;

export const subHeaderAnimation = keyframes`
from {transform: translateX(0)}
to {transform: translateX(${animationProps.subHeaderDrift})}
`;

export const opacityAnimation = keyframes`
from {opacity: 0}
to {opacity: 1}
`;

const getIncrementedAngle = (angle, step) => angle + step * 60;

export const spiralAnimation = (initialAngle, twist) => keyframes`
0% {transform: rotate(${initialAngle}deg) translate(45vmin) rotate(${initialAngle}deg);}
16.66% {transform: rotate(${twist}) translate(0px) rotate(${twist});}
33.33% {transform: rotate(${getIncrementedAngle(
  initialAngle,
  1
)}deg) translate(-45vmin) rotate(${getIncrementedAngle(initialAngle, 1)}deg);}

50% {transform: rotate(${twist}) translate(0px) rotate(${twist});}
66.66% {transform: rotate(${getIncrementedAngle(
  initialAngle,
  2
)}deg) translate(-45vmin) rotate(${getIncrementedAngle(initialAngle, 2)}deg);}

83.33% {transform: rotate(${twist}) translate(0px) rotate(${twist});}
100% {transform: rotate(${getIncrementedAngle(
  initialAngle,
  3
)}deg) translate(-45vmin) rotate(${getIncrementedAngle(initialAngle, 3)}deg);}

`;

export const colorChange = (initialColor, finalColor) => keyframes`
0% {background-color: ${finalColor}}
16.66% {background-color: ${initialColor}}
33.33% {background-color: ${finalColor}}
50% {background-color: ${initialColor}}
66.66% {background-color: ${finalColor}}
83.33% {background-color: ${initialColor}}
100% {background-color: ${finalColor}}
`;
