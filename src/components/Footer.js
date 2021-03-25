import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Entre na Aventura da EcolTech, para reciclares com mais diversão!
        </p>
        <p className="footer-subscription-text">
          Procura os caixotes do lixo e lê os Qr Code!
        </p>
        <div className="input-areas">
          <form>
            <form
              action="mailto:ecolsuportetech@gmail.com"
              method="GET"
              target="_blank"
            >
              <input
                type="submit"
                value="Enviar um email"
                className="button is-primary"
              />
            </form>
          </form>
        </div>
      </section>
      <div class="footer-links">
      <div class='footer-link-items'>
      <h2>Parcerias</h2>
            <a>Lidl</a>
            <a>Galp</a>
            <a>EDP</a>
            <a>SUMA</a>
            <a>BB Brindes</a>  
          </div>
          <div class='footer-link-items'>
      <h2>Departamentos</h2>
            <a>Tecnologias</a>
            <a>Marketing</a>
            <a>Recursos humanos</a>
            <a>Adminstração</a>
          </div>
        <div class="footer-link-items">
          <h2>Redes sociais</h2>
          <a href="https://www.instagram.com/ecol_tech/">
            Instagram <i class="fab fa-instagram" />
          </a>
          <a href="https://www.facebook.com/EcolTech-104502021725891">
            Facebook <i class="fab fa-facebook" />
          </a>
          <a href="https://twitter.com/EcolTech">
            Twitter <i class="fab fa-twitter" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
