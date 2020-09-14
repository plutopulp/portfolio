import React from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/pages/home";
import { routes } from "./routes";

const App = () => (
  <Router>
    <Switch>
      <Route exact path={routes.pages.home} component={Home} />
      <Route exact path={routes.pages.projects} component={Home} />
      <Route exact path={routes.pages.snippets} component={Home} />
      <Route exact path={routes.pages.resume} component={Home} />
    </Switch>
  </Router>
);

export default App;
