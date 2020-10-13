import React from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/home/home";
import { Projects } from "./components/projects/projects";
import { Snippets } from "./components/snippets/snippets";
import { Resume } from "./components/resume/resume";
import { routes } from "./routes";
import "react-awesome-slider/dist/styles.css";

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
