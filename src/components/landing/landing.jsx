import React from "react";
import PropTypes from "prop-types";
import { Header } from "../landing/header";
import { SpiralCircles } from "../landing/circles";
import { useWindowSize } from "../../hooks/useWindowSize";
import { LandingSegment } from "../common/styles/index";

export const Landing = ({ children, mobile }) => {
  const windowSize = useWindowSize();
  return (
    <LandingSegment inverted vertical height={windowSize.height} id="landing">
      {children}
      <Header mobile={mobile} />
      <SpiralCircles />
    </LandingSegment>
  );
};

Landing.propTypes = {
  children: PropTypes.node.isRequired,
  mobile: PropTypes.bool,
};
