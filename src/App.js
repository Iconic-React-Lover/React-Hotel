import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './index.css';
import Book from "./pages/Book";
import Home from "./pages/Home";
import House from "./pages/House";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Basic from "./pages/Basic";
import Navbar from "./components/Navbar";
import Service from "./components/Services";
import Error from "./pages/Error";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/house">
            <House />
          </Route>
          <Route path="/book">
            <Book />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/basic">
            <Basic />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
          {/* <Route path="/props">
            <ComponentWithProps backgroundColor="blue" name="Props" />
          </Route>
          <Route path="/propChildren">
            <ComponentWithPropChildren >
              <h1> Hello </h1>
            </ComponentWithPropChildren>
          </Route>
          <Route path="/class">
               <Basic_With_Class name="John" />
          </Route>
          <Route path="/update">
               <Update />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}