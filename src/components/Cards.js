import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>NOVIDADES!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/Questionario.jpg"
              text="Faça download de um questionário para preencher, e enviar por email"
              label="Preencher"
              path="https://cdn.discordapp.com/attachments/811918774205939715/821448396723322930/Curriculo.pdf"
            />
            <CardItem
              src="images/Facebook.png"
              text="Veja as nossas redes sociais, com a nossa logo e banner! Siga para ter toas as novidades em primeira mão"
              label="Social Links"
              path="/social-links"
            />
            <CardItem
              src="images/produto.jpg"
              text="Pequena beta do nosso caixote do lixo inteligente"
              label="Produtos"
              path="https://cdn.discordapp.com/attachments/811918774205939715/822041964237029417/best_ecoponto_of_the_mundo.JPG"
            />
            <CardItem
              src="images/produto-caneca.jpg"
              text="Clique aui e veja os nossos brindes!"
              label="Brindes"
              path="/brindes"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/Questionario-2.jpg"
              text="Faça um questionário rápido"
              label="Preencher"
              path="https://surveynuts.com/surveys/take?id=218644&c=9761142753DPPD"
            />
            <CardItem
              src="images/Powerpoint.jpg"
              text="Veja um powerpoint com pequenas Informações"
              label="Informações"
              path="https://cdn.discordapp.com/attachments/811918774205939715/821852134680297492/Ecoltech.pdf"
            />
            <CardItem
              src="images/Swot.jpg"
              text="Veja a nossa análise Swot!"
              label="Informações"
              path="https://cdn.discordapp.com/attachments/811918774205939715/824419098859274280/Swot.pdf"
            />
            <CardItem
              src="images/Descricao.jpg"
              text="Veja a como foi feito a nossa aplicação/website"
              label="Informações"
              path="https://cdn.discordapp.com/attachments/730418434936012872/822071765957083177/Aplicacao_Descricao.pdf"
            />
            <CardItem
              src="images/equipas.png"
              text="Veja os nossos departamentos"
              label="Informações"
              path="/equips"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
