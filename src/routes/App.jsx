import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Suscription from '../pages/Suscription';
import ConfirmSuscription from '../pages/ConfirmSucription';

const App = () => (

        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Suscription/>} />
                <Route path="/confirmado" element={<ConfirmSuscription/>} />
            </Routes>
        </BrowserRouter>
);

export default App;