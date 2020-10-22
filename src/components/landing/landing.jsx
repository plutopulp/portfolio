import React from "react";
import PropTypes from "prop-types";
import { useContextRef } from "react-context-refs";
import { Header } from "../landing/header";
import { SpiralCircles } from "../landing/circles";
import { useWindowSize } from "../../hooks/useWindowSize";
import { LandingSegment } from "../common/styles/index";

export const Landing = ({ children, mobile }) => {
  const windowSize = useWindowSize();
  const ref = useContextRef("section", { name: "home" });

  return (
    <div ref={ref} id="home">
      <LandingSegment inverted vertical height={windowSize.height}>
        {children}
        <Header mobile={mobile} />
        <SpiralCircles />
      </LandingSegment>
    </div>
  );
};

Landing.propTypes = {
  children: PropTypes.node.isRequired,
  mobile: PropTypes.bool,
};
