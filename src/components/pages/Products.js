import React from "react";
import "../../App.css";
import "./Products.css";
import "../Cards.css";
import CardItem from "../CardItem";

export default function Products() {
  return (
    <div class="products">
      <h1>Produtos!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/produto.jpg"
              text="Pequena beta do nosso caixote do lixo inteligente"
              label="Produtos"
              path="https://cdn.discordapp.com/attachments/811918774205939715/822041964237029417/best_ecoponto_of_the_mundo.JPG"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
