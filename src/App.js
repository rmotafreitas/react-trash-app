import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Brindes from "./components/pages/Brindes";
import Profile from "./components/pages/Profile";
import WhatAreWe from "./components/pages/WhatAreWe"
import SocialLinks from "./components/pages/SocialLinks"
import Equips from "./components/pages/Equips"
import Tic from "./components/pages/Tic"
import Marketing from "./components/pages/Marketing"
import Rhumanos from "./components/pages/Rhumanos"
import Admins from "./components/pages/Admins"
//import Login from "./components/pages/Login";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/brindes" exact component={Brindes} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/what-are-we" exact component={WhatAreWe} />
          <Route path="/social-links" exact component={SocialLinks} />
          <Route path="/equips" exact component={Equips} />
          <Route path="/tic" exact component={Tic} />
          <Route path="/marketing" exact component={Marketing} />
          <Route path="/admins" exact component={Admins} />
          <Route path="/rhumanos" exact component={Rhumanos} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
