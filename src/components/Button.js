import React, { useState, useEffect } from "react";
import "./Button.css";
import { Link } from "react-router-dom";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  //your config
});

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
};

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const [user] = useAuthState(auth);

  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  if (!user) {
    return (<Link className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={signInWithGoogle}
        type={type}
      >
        {children}
      </button>
    </Link>);
  } else {
    return (
      <Link to="/profile" className="btn-mobile">
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      </Link>
    );
  }
};
