
import React from 'react'
import Juego from '../components/Juego.jsx'
import '../assets/styles/App.scss'
import Header from '../components/Header.jsx';


const AppJuego = () => {
    return (
        <div>
            <Header/>
           <Juego/>
        </div>
    );
}

export default AppJuego;