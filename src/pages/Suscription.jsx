import React from 'react';
import aitorflix from "../assets/static/aitorflix.png";
import "../assets/styles/suscription.css";

const Suscription = () => (
    <div id='container'>
        <figure>
            <img src={aitorflix} alt="AitorFlix" />
        </figure>
        <h1>RENOVACIÓN DE LA MEMBRESÍA</h1>
        <p>No pudimos renovar su membresía para el próximo ciclo de facturación de su suscripción, por lo tanto, suspenderemos su membresía si no recibimos una respuesta dentro de las 72 horas</p>
    </div>
);

export default Suscription;