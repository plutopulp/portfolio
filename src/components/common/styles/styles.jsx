import styled, { css } from "styled-components";
import { responsiveProps } from "./styleProps";

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
  background-color: ${(props) => props.color};
  color: white;
  text-align: center;
  margin: 0 auto;
  display: flex;
  align-items: center;
  transition-property: width, background-color;
  &:hover {
    background-color: #d495d5;
    width: calc(0.95 * ${(props) => props.radius});
    transition-property: width, background-color;
  }
`;
