import React from "react";
import "../../App.css";
import "./Products.css";
import "../Cards.css";
import CardItem from "../CardItem";

export default function Marketing() {
  return (
    <div class="tic">
      <h1>Departamento de Marketing!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/faria.jpeg"
              text="Faria"
              label="Marketing"
              path="/marketing"
            />    
            <CardItem
              src="images/ines.jpeg"
              text="Ines"
              label="Marketing"
              path="/marketing"
            />    
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/ro.jpeg"
              text="Hugo Rodrigo"
              label="Marketing"
              path="/marketing"
            />
            <CardItem
              src="images/silva.jpeg"
              text="João Silva"
              label="Marketing"
              path="/marketing"
            />
          </ul>  
        </div>
      </div>
    </div>
  );
}
