import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewVideo from "./pages/register/NewVideo";
import NotFound from "./pages/NotFound";
import NewCategory from "./pages/register/NewCategory";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/register/video" component={NewVideo} />
      <Route path="/register/category" component={NewCategory} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
