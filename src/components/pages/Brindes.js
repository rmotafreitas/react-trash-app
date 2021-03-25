import React from "react";
import "../../App.css";
import "./Products.css";
import "../Cards.css";
import CardItem from "../CardItem";

export default function Brindes() {
  return (
    <div class="products">
      <h1>Brindes!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/produto-caneca.jpg"
              text="Compre a nossa caneca ecológica!"
              label="Comprar"
              path="/products"
            />
            <CardItem
              src="images/produto-caneta.jpg"
              text="Veja e compre a nossa caneca ecológica!"
              label="Comprar"
              path="/products"
            />
            </ul>
            <ul className="cards__items">
            <CardItem
              src="images/produto-camisola.jpg"
              text="Tenha a opurtunidade de nos representar, com o uso da nossa camisola!"
              label="Comprar"
              path="/products"
            />
            <CardItem
              src="images/produto-chaves.jpg"
              text="Compre um porta chaves reclicável!"
              label="Comprar"
              path="/products"
            />
            </ul>
        </div>
      </div>
    </div>
  );
}
