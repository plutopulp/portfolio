import styled, { css } from "styled-components";
import { responsiveProps } from "./styleProps";
import { spiralAnimation, opacityAnimation } from "./animations";
export const SpacerLg = styled.div`
  margin-top: ${(props) =>
    props.mobile
      ? `${responsiveProps.mobile.marginTops.spacerLg}`
      : `${responsiveProps.desktop.marginTops.spacerLg}`};
`;

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
export const StyledCircle = styled(Transition)`
  width: ${(props) => props.radius};
  height: ${(props) => props.radius};
  border-radius: 50%;
  position: absolute;
  top: ${(props) => props.initialTop}em;
  left: ${(props) => props.initialLeft}em;
  background-color: ${(props) => props.color};
  transition-property: width, background-color;
  animation: ${spiralAnimation} 20s 3s ease-in-out infinite alternate both;
  &:hover {
    background-color: #d495d5;
    transition-property: background-color;
  }
`;
