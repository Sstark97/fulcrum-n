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
    </div>
);

export default ConfirmSuscription;