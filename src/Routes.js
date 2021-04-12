import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./Pages/Main/Main";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Category from "./Pages/Category/Category";
import DetailFile from "./Pages/DetailFile/DetailFile";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/detailfile" component={DetailFile} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
