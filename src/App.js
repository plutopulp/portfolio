import React from "react";
import "semantic-ui-css/semantic.min.css";

import { ResponsiveContainer } from "./components/layout/containers";
import { HomeContent } from "./components/pages/home";

const App = () => (
  <ResponsiveContainer>
    <HomeContent />
  </ResponsiveContainer>
);

export default App;
