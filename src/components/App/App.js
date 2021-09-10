import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Carousel from "./Carousel";
import Categories from "./Categories";
import BestSelling from "./BestSelling";
import Login from "../Login/Login";
import ForgotPassword from "../Login/ForgotPassword";
import UserSignup from "../Signup/UserSignup";
import About from "../About/About";
import Contact from "../Contact/Contact";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={UserSignup} />
          <Route path="/ForgotPassword" component={ForgotPassword} />
          <Route path="/About">
            <Navbar />
            <About />
          </Route>
          <Route path="/Contact">
            <Navbar />
            <Contact />
          </Route>
          <Route path="/">
            <Navbar />
            <Carousel />
            <Categories />
            <BestSelling />
            {/* <Review /> */}
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
