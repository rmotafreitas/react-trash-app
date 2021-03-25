import React from "react";
import "../../App.css";
import "./Equips.css";

export default function Equips() {
  return (
    <div class="equips">
      <h1 className="equip">Departamentos</h1>
      <div class="wrapper">
        <div class="button" onClick={() =>  window.location.href="/tic"}>
          <div class="icon">
            <i class="fas fa-laptop"></i>
          </div>
          <span>Informática</span>
        </div>
        <div class="button" onClick={() =>  window.location.href="/marketing"}>
          <div class="icon">
            <i class="fas fa-book-open"></i>
          </div>
          <span>Marketing</span>
        </div>
        <div class="button" onClick={() =>  window.location.href="/rhumanos"}>
          <div class="icon">
            <i class="far fa-grin-beam"></i>
          </div>
          <span>R. Humanos</span>
        </div>
        
        <div class="button" onClick={() =>  window.location.href="/admins"}>
          <div class="icon">
          <i class="fas fa-user-shield"></i>
          </div>
          <span>Admin's</span>
        </div>
      </div>
    </div>
  );
}
