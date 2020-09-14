import React from "react";
import "semantic-ui-css/semantic.min.css";

import { ResponsiveContainer } from "./components/layout/containers";
import { HomeHeading, HomeBody } from "./components/pages/home";

const App = () => (
  <ResponsiveContainer heading={<HomeHeading />} body={<HomeBody />} />
);

export default App;
