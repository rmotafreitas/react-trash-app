import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
//import { useCollectionData } from "react-firebase-hooks/firestore";

function Navbar() {
  const auth = firebase.auth();
  /*const firestore = firebase.firestore();
  const analytics = firebase.analytics();*/

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  const [user] = useAuthState(auth);


  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  if (!user) {
      
    return (
        <>
          <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                EcolTech <i class="fas fa-trash"></i>
              </Link>
              <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
              </div>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/what-are-we"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    O que somos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/products"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Produtos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-links-mobile"
                    onClick={signInWithGoogle}
                  >
                    Login With Goole <i class="fab fa-google"></i>
                  </Link>
                </li>
              </ul>
              {button && (
                <Button buttonStyle="btn--outline">
                  Login <i class="fab fa-google"></i>
                </Button>
              )}
            </div>
          </nav>
        </>
      );
  } else {
    
    
    return (
        <>
          <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                EcolTech <i class="fas fa-trash"></i>
              </Link>
              <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
              </div>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/what-are-we"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    O que somos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/products"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Produtos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile"
                    className="nav-links-mobile"
                    onClick={closeMobileMenu}
                  >
                    

                    {user.displayName}<i class="fab fa-google"></i>
                  </Link>
                </li>
              </ul>
              {button && (
                <Button buttonStyle="btn--outline">
                  {user.displayName}
                </Button>
              )}
            </div>
          </nav>
        </>
      );
  }
  
}

export default Navbar;
