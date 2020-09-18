import React from "react";
import { HomeHeading } from "./heading";
import { HomeBody } from "./body";
import { ResponsiveContainer } from "../layout/containers";

export const Home = () => (
  <ResponsiveContainer heading={<HomeHeading />} body={<HomeBody />} />
);
