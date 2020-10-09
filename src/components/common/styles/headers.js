import styled, { css } from "styled-components";
import { Header } from "semantic-ui-react";

import {
  headerAnimation,
  subHeaderAnimation,
  bodyAnimation,
} from "./animations";
import { responsiveProps, animationProps } from "./styleProps";

const InvertedHeaderCommon = css`
  font-weight: 500;
  color: #ffffff;
  text-align: center;
`;

export const MainHeader = styled(Header)`
  ${InvertedHeaderCommon};
  font-size: ${(props) =>
    props.mobile
      ? `${responsiveProps.mobile.fontSize.header}`
      : `${responsiveProps.desktop.fontSize.header}`};
  margin-top: 0;
`;

export const BodyHeader = styled(MainHeader)`
  color: #333;
  font-weight: 700;
  margin-bottom: 2em;
  transform: translateX(${({ animate }) => (animate ? "0" : "-5em")});
  transition: transform 1s;
`;

export const MainHeaderWithAnimation = styled(MainHeader)`
  position: relative;
  top: -${animationProps.headerDrift};
  animation: ${headerAnimation} ${animationProps.durations.long}
    ${animationProps.durations.med} forwards;
`;

export const SubHeader = styled(Header)`
  ${InvertedHeaderCommon};
  font-size: ${(props) =>
    props.mobile
      ? `${responsiveProps.mobile.fontSize.subHeader}`
      : `${responsiveProps.desktop.fontSize.subHeader}`};
  margin-top: ${(props) =>
    props.mobile
      ? `${responsiveProps.mobile.marginTops.subHeader}`
      : `${responsiveProps.desktop.marginTops.subHeader}`};
`;

export const SubHeaderWithAnimation = styled(SubHeader)`
  position: relative;
  left: -${animationProps.subHeaderDrift};
  animation: ${subHeaderAnimation} ${animationProps.durations.long}
    ${animationProps.durations.med} forwards;
`;
