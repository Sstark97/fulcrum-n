import React from 'react';
import aitorflix from "../assets/static/aitorflix.png";
import "../assets/styles/confirm.css";

const ConfirmSuscription = () => (
    <div id='container'>
        <nav>
            <img src={aitorflix} alt='aitorflix' />

            <div id='account'>
                <span class='confirm_span'>Tu cuenta</span>
                <span class='confirm_span'>Cerrar sesión</span>
            </div> 
        </nav>

        <h1>¡AitorFlix te da la bienvenida!</h1>

        <div>
            <p>Tu suscripción a AitorFlix ha sido renovada con éxito, ahora es cuándo se vierne lo bueno.</p>
            <p>Dudamos mucho de que quiera cancelar su suscripción, sabemos lo cómoda que se encuentra disfrutando de nuestros servicios.</p>
            <p>Si estabas disfrutando de AitorFlix, a partir de ahora estarás más a gusto que antes, los beneficios y ventajas que tiene este servicio son inmnumerables, aunque dentro de ellas no están dejarse perder a Pokémon.</p>
        </div>

        <div id='account_details'>
            <h3>Detalles de tu cuenta</h3>
            <p>
                <span>Nombre: </span>
                <span>Sarita la Bobita</span>
            </p>

            <p>
                <span>Dirección de correo: </span>
                <span>saracs15@scssn@gmail.com</span>
            </p>
            
            <p>
                <span>Información de Pago: </span>
                <span>MIMOS ILIMITADOS ***** 1506</span>
            </p>
        </div>

        <div id='suscription'>
            <h3></h3>
            <p></p>
        </div>

    </div>
);

export default ConfirmSuscription;