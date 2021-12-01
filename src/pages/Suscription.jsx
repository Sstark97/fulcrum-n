import React from "react";
import aitorflix from "../assets/static/aitorflix.png";
import { Link } from "react-router-dom";
import "../assets/styles/suscription.css";

const Suscription = () => (
  <div id="container">
    <figure>
      <img src={aitorflix} alt="AitorFlix" />
    </figure>
    <h1>RENOVACIÓN DE LA MEMBRESÍA</h1>
    <p>
      Ha pasado su período de prueba, sabemos que han sido unos 15 días bastante satisfactorios,
      sin embargo para poder continuar con los servicios de AitorFlix necesitamos que renueve su membresía.
      Dejeme recordarle las ventajas que tiene estar suscrito a este servicio.
    </p>
    <ul>
        <li>- Amor y Cariño asegurado a grandes cantidades.</li>
        <li>- Mimos con mantita en noches de frío, con calor corporal incorporado</li>
        <li>- Maratones de Loki y de otras películas interesantes.</li>
        <li>- Perseguir manteles voladores sin dar nada de verguenza ajena</li>
    </ul>
    <span>Obviamente AitorFlix quiere que renueve su <br/>membresía, para ello debe de hacer click en el botón <br/>de abajo. ;)</span>
    <button><Link to='/confirmado'> RENOVAR MEMBRESIA </Link></button>
    <span>- Tu queridisimo Frontend Lead</span>
  </div>
);

export default Suscription;
