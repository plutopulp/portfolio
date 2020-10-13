import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Home } from "./components/home/home";
import "react-awesome-slider/dist/styles.css";

import { ResponsiveContainer } from "./components/layout/containers";
import { Landing } from "./components/landing/landing";
import { About } from "./components/about/about";
import { Skills } from "./components/skills/skills";

const App = () => (
  <ResponsiveContainer
    landing={<Landing />}
    body={
      <React.Fragment>
        <About />
        <Skills />
      </React.Fragment>
    }
  />
);
export default App;
