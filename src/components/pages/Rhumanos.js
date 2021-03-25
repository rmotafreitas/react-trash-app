import React from "react";
import "../../App.css";
import "./Products.css";
import "../Cards.css";
import CardItem from "../CardItem";

export default function Rhumanos() {
  return (
    <div class="tic">
      <h1>Recursos Humanos!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/alex.jpeg"
              text="Alexandre"
              label="R Humanos"
              path="/rhumanos"
            />    
            <CardItem
              src="images/diogo.jpeg"
              text="Diogo"
              label="R Humanos"
              path="/rhumanos"
            />    
            <CardItem
              src="images/lino.jpeg"
              text="João Lino"
              label="R Humanos"
              path="/rhumanos"
            />    
          </ul>          
        </div>
      </div>
    </div>
  );
}
