import styled, { css } from "styled-components";
import { responsiveProps } from "./styleProps";
import {
  spiralAnimation,
  opacityAnimation,
  circularAnimation,
} from "./animations";

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
export const BaseCircle = css`
  border-radius: 50%;
  position: absolute;
`;
export const TopRightCircle = styled.div`
  ${BaseCircle};
  width: 5%;
`;
export const Circle = styled.div`
  width: ${(props) => props.diameter};
  height: ${(props) => props.diameter};
  border-radius: 50%;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  background-color: ${(props) => props.color};
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

export const MovingCircle = styled(Circle)`
  animation: ${circularAnimation} 20s 2s ease-in-out alternate infinite;
`;
