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

export const buttonAnimation = keyframes`
from {opacity: 0}
to {opacity: 1}
`;
