import React from "react";
import PropTypes from "prop-types";
import { Banner } from "./banner";
import { ResponsiveContainer } from "../layout/containers";
import { SpiralCircles } from "./circles";
import { useWindowSize } from "../../hooks/useWindowSize";

export const Home = ({ mobile }) => {
  const windowSize = useWindowSize();
  return (
    <ResponsiveContainer bannerHeight={windowSize.height}>
      <Banner mobile={mobile} />
      <SpiralCircles />
    </ResponsiveContainer>
  );
};

Home.propTypes = {
  mobile: PropTypes.bool,
};
