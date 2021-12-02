import React from "react";
import { Link } from "react-router-dom";
import aitorflix from "../assets/static/aitorflix.png";
import "../assets/styles/confirm.css";

const ConfirmSuscription = () => (
  <div id="container">
    <nav>
      
      <Link to='/'><img src={aitorflix} alt="aitorflix" /></Link>

      <div id="account">
        <span className="confirm_span">Tu cuenta</span>
        <span className="confirm_span">Cerrar sesión</span>
      </div>
    </nav>

    <h1>¡AitorFlix te da la bienvenida!</h1>

    <div>
      <p>
        Tu suscripción a AitorFlix ha sido renovada con éxito, ahora es cuándo
        se viene lo bueno.
      </p>
      <p>
        Dudamos mucho de que quiera cancelar su suscripción, sabemos lo cómoda
        que se encuentra disfrutando de nuestros servicios.
      </p>
      <p>
        Si estabas disfrutando de AitorFlix, a partir de ahora estarás más a
        gusto que antes, los beneficios y ventajas que tiene este servicio son
        inmnumerables, aunque <br /> dentro de ellas no están dejarse perder a
        Pokémon.
      </p>
    </div>

    <div id="account_details">
      <h3>Detalles de tu cuenta</h3>
      <p>
        <span className="left">Nombre: </span>
        <span className="rigth">Sarita la Bobita</span>
      </p>

      <p>
        <span className="left">Dirección de correo: </span>
        <span className="rigth">saracs15scssn@gmail.com</span>
      </p>

      <p>
        <span className="left">Información de Pago: </span>
        <span className="rigth">MIMOS ILIMITADOS ***** 1506</span>
      </p>
    </div>

    <div id="suscription">
      <h3>Tu suscripción</h3>
      <p>Echemos un ojo a algunas ventajas más de tu suscripción: </p>
      <ul id="confirm_ul">
        <li>- Amor y Cariño asegurado a grandes cantidades.</li>
        <li>
          - Mimos con mantita en noches de frío, con calor corporal incorporado
        </li>
        <li>- Noches de vicio con el POkémon hasta las 3 de la mañana </li>
        <li>- Pequeño regalo de bienvenida </li>
      </ul>
    </div>
  </div>
);

export default ConfirmSuscription;
