import React from "react";
import "../../App.css";
import "./Profile.css";
 
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
//import { useCollectionData } from "react-firebase-hooks/firestore";

export default function Profle() {
  const auth = firebase.auth();
  /*const firestore = firebase.firestore();
  const analytics = firebase.analytics();

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);*/

  const [user] = useAuthState(auth);

  function logout(a) {
    a.signOut();
    window.location.href = "/";
  }

  return (
    <h1 className="profile">
      <div className="box">
        <img src={user.photoURL} alt="" class="box-img" />
        <h1>{user.displayName}</h1>
        <h5>Caçador de lixo - Amigo do Ambiente</h5>
        <p><br></br><p></p> 
          <i class="fas fa-qrcode"></i> Número de Qr Codes lixo: 0
        </p>
          <button className="sign-out" onClick={() => logout(auth)}>
            Sign Out
          </button>
      </div>
    </h1>
  );
}
