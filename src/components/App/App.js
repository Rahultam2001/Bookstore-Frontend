import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";

import Login from "../Login/Login";
import ForgotPassword from "../Login/ForgotPassword";
import UserSignup from "../Signup/UserSignup";

// Protected Route
import Protected from "../Protected";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Protected" component={Protected} />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={UserSignup} />
          <Route path="/ForgotPassword" component={ForgotPassword} />
          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
