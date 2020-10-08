import React from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/home/home";
import { Projects } from "./components/projects/projects";
import { Snippets } from "./components/snippets/snippets";
import { Resume } from "./components/resume/resume";
import { routes } from "./routes";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import {
  Provider,
  Link,
  withNavigationContext,
  withNavigationHandlers,
} from "react-awesome-slider/dist/navigation";

const NavigationSlider = withNavigationHandlers(AwesomeSlider);

const Slider = () => {
  return (
    <NavigationSlider
      className="awesome-slider"
      media={[
        {
          slug: "page-one",
          className: "page-one",
          children: () => <p>Page One</p>,
        },
        {
          slug: "page-two",
          className: "page-two",
          children: () => <p>Page Two</p>,
        },
        {
          slug: "page-three",
          className: "page-three",
          children: () => <p>Page Three</p>,
        },
      ]}
    />
  );
};

const Header = () => {
  return (
    <nav>
      <Link href="page-one">Home</Link>
      <Link href="page-two">Projects</Link>
    </nav>
  );
};

const App = () => (
  <Router>
    <Switch>
      <Route exact path={routes.pages.home} component={Home} />
      <Route exact path={routes.pages.projects} component={Projects} />
      <Route exact path={routes.pages.snippets} component={Snippets} />
      <Route exact path={routes.pages.resume} component={Resume} />
    </Switch>
  </Router>
);
export default App;
