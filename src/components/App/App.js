import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Carousel from "./Carousel";
import Categories from "./Categories";
import Login from "../Login/Login";
import ForgotPassword from "../Login/ForgotPassword";
import UserSignup from "../Signup/UserSignup";
import About from "../About/About";
import Contact from "../Contact/Contact";
import UserProfile from "../UserProfile/UserProfile";
import SearchResult from "../SearchResult/AllCategories";
import SellerPanel from "../SellerPanel/SellerPanel";
import Cart from "../Cart/Cart";
import Wishlist from "../Cart/Wishlist";
import Admin from "../AdminPanel/AdminPanel";

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
          <Route path="/Contact">
            <Navbar />
            <Contact />
          </Route>
          <Route path="/UserProfile/:panel">
            <Navbar />
            <UserProfile />
          </Route>
          <Route path="/SearchResult/:query">
            <Navbar />
            <SearchResult />
          </Route>
          <Route path="/SellerPanel/:panel">
            <Navbar />
            <SellerPanel />
          </Route>
          <Route path="/Cart">
            <Navbar />
            <Cart />
          </Route>
          <Route path="/Wishlist">
            <Navbar />
            <Wishlist />
          </Route>
          <Route path="/Admin/:panel">
            <Admin />
          </Route>
          <Route path="/">
            <Navbar />
            <Carousel />
            <Categories />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
