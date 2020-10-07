import React from "react";
import PropTypes from "prop-types";
import { Banner } from "./banner";
import { ResponsiveContainer } from "../layout/containers";
import { StaticCircles, SpiralCircles } from "./circles";

export const Home = ({ mobile }) => {
  return (
    <ResponsiveContainer>
      <Banner mobile={mobile} />
      <SpiralCircles />
    </ResponsiveContainer>
  );
};

Home.propTypes = {
  mobile: PropTypes.bool,
};
