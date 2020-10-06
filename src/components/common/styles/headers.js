import styled, { css } from "styled-components";
import { Header } from "semantic-ui-react";

import { headerAnimation, subHeaderAnimation } from "./animations";
import { responsiveProps, animationProps } from "./styleProps";

const HeaderFont = css`
  font-weight: 500;
  color: #ffffff;
`;

export const MainHeader = styled(Header)`
  ${HeaderFont};
  margin-top: 0;
  font-size: ${(props) =>
    props.mobile
      ? `${responsiveProps.mobile.fontSize.header}`
      : `${responsiveProps.desktop.fontSize.header}`};
`;

export const MainHeaderWithAnimation = styled(MainHeader)`
  position: relative;
  top: -${animationProps.headerDrift};
  animation: ${headerAnimation} ${animationProps.durations.long} forwards;
`;

export const SubHeader = styled(Header)`
  ${HeaderFont};
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
  animation: ${subHeaderAnimation} ${animationProps.durations.long} forwards;
`;
