import React from "react";
import "../../App.css";
import "./Products.css";
import "../Cards.css";
import CardItem from "../CardItem";

export default function Admins() {
  return (
    <div class="tic">
      <h1>O nosso chefe!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/tomas.jpeg"
              text="Tomás"
              label="Admin"
              path="/admins"
            />       
          </ul>          
        </div>
      </div>
    </div>
  );
}
