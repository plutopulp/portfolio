import React from "react";
import "semantic-ui-css/semantic.min.css";
import "react-awesome-slider/dist/styles.css";
import { RefProvider } from "react-context-refs";

import { ResponsiveContainer } from "./components/layout/containers";
import { Landing } from "./components/landing/landing";
import { About } from "./components/about/about";
import { Skills } from "./components/skills/skills";
import { Projects } from "./components/projects/projects";

// Place all sections in a responsive container which has media breakpoints.
// For given media range, the container returns cloned sections with appropriate
// props and children for the media range.
const App = () => (
  <RefProvider>
    <ResponsiveContainer
      landing={<Landing />}
      body={
        <React.Fragment>
          <About />
          <Skills />
          <Projects />
        </React.Fragment>
      }
    />
  </RefProvider>
);
export default App;
