import styled, { css, keyframes } from "styled-components";
import { Header } from "semantic-ui-react";
import { responsiveProps, animationProps } from "./styleProps";

const headingAnimation = keyframes`
from {transform: translateY(0)}
to {transform: translateY(${animationProps.headingDrift})}
`;

const subHeadingAnimation = keyframes`
from {transform: translateX(0)}
to {transform: translateX(${animationProps.subHeadingDrift})}
`;

const HeadingFont = css`
  font-weight: 500;
  color: #ffffff;
`;

export const SpacerLg = styled.div`
  margin-top: ${(props) =>
    props.mobile
      ? `${responsiveProps.mobile.marginTops.spacerLg}`
      : `${responsiveProps.desktop.marginTops.spacerLg}`};
`;

export const StyledHeading = styled(Header)`
  ${HeadingFont};
  font-size: ${(props) =>
    props.mobile
      ? `${responsiveProps.mobile.fontSize.heading}`
      : `${responsiveProps.desktop.fontSize.heading}`};
  position: relative;
  top: -${animationProps.headingDrift};
  animation: ${headingAnimation} ${animationProps.durationLong} forwards;
`;

export const StyledSubHeading = styled(Header)`
  ${HeadingFont};
  font-size: ${(props) =>
    props.mobile
      ? `${responsiveProps.mobile.fontSize.subHeading}`
      : `${responsiveProps.desktop.fontSize.subHeading}`};
  margin-top: ${(props) =>
    props.mobile
      ? `${responsiveProps.mobile.marginTops.subHeading}`
      : `${responsiveProps.desktop.marginTops.subHeading}`};
  position: relative;
  left: -${animationProps.subHeadingDrift};
  animation: ${subHeadingAnimation} ${animationProps.durationLong} forwards;
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
