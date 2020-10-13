import React from "react";
import PropTypes from "prop-types";
import { ResponsiveContainer } from "../layout/containers";
import { Body } from "./body";
import { Landing } from "../landing/landing";

export const Home = () => (
  <ResponsiveContainer landing={<Landing />} body={<Body />} />
);

Home.propTypes = {
  mobile: PropTypes.bool,
};
