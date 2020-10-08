import React from "react";
import PropTypes from "prop-types";
import { Header } from "./header";
import { ResponsiveContainer } from "../layout/containers";
import { SpiralCircles } from "./circles";
import { useWindowSize } from "../../hooks/useWindowSize";
import { HomeBody } from "./body";

export const Home = ({ mobile }) => {
  const windowSize = useWindowSize();
  return (
    <ResponsiveContainer
      bannerHeight={windowSize.height}
      bannerChildren={
        <React.Fragment>
          <Header mobile={mobile} />
          <SpiralCircles />
        </React.Fragment>
      }
      body={<HomeBody />}
    />
  );
};

Home.propTypes = {
  mobile: PropTypes.bool,
};
