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

        <div>
            <p></p>
            <p></p>
            <p></p>
        </div>

        <div id='account_details'>
            <h3>r</h3>
            <p></p>
            <p></p>
            <p></p>
        </div>

        <div id='suscription'>
            <h3>r</h3>
            <p></p>
        </div>

    </div>
);

export default ConfirmSuscription;