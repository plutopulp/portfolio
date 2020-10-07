import { keyframes } from "styled-components";
import { animationProps } from "./styleProps";

export const headerAnimation = keyframes`
from {transform: translateY(0)}
to {transform: translateY(${animationProps.headerDrift})}
`;

export const subHeaderAnimation = keyframes`
from {transform: translateX(0)}
to {transform: translateX(${animationProps.subHeaderDrift})}
`;

export const opacityAnimation = keyframes`
from {opacity: 0}
to {opacity: 1}
`;

export const spiralAnimation = (initialAngle, twist) => keyframes`
from {transform: rotate(${initialAngle}) translate(25vw) rotate(${initialAngle});}
to {transform: rotate(${twist}) translate(0px) rotate(${twist});}
`;
