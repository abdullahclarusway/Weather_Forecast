import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/SignIn";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route  path="/main" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
