import React from "react";
import "../../App.css";
import "./Products.css";
import "../Cards.css";
import CardItem from "../CardItem";

export default function Tic() {
  return (
    <div class="tic">
      <h1>Departamento de TIC!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/afonso.jpg"
              text="Afonso"
              label="Tic"
              path="/tic"
            />    
            <CardItem
              src="images/ricardo.jpeg"
              text="Ricardo"
              label="Tic"
              path="/tic"
            />    
          </ul>      
          <ul className="cards__items">
            <CardItem
              src="images/gaa.jpeg"
              text="Gabriel"
              label="Tic"
              path="/tic"
            />    
            <CardItem
              src="images/monteiro.jpeg"
              text="João Monteiro"
              label="Tic"
              path="/tic"
            />    
          </ul>      
        </div>
      </div>
    </div>
  );
}
