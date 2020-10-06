import { keyframes } from "styled-components";
import { animationProps } from "./styleProps";

const getRandomAngle = () => `${Math.random() * 100}deg`;
const getRandomDistance = () => `${Math.random() * 100}em`;

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

export const spiralAnimation = keyframes`
from {transform: rotate(${getRandomAngle()}) translate(${getRandomDistance()}) rotate(0deg)}
to {transform: rotate(${getRandomAngle()}) translate(0px) rotate(-360deg)}
`;
