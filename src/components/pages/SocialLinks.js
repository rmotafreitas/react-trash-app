import React from "react";
import "../../App.css";
import "./SocialLinks.css";

export default function SocialLinks() {
  return (
    <div class="social-menu">
      <h1>Redes Socias</h1>
      <ul>
        <li>
          <a href="https://www.facebook.com/EcolTech-104502021725891">
            <i class="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/EcolTech">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ecol_tech/">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}