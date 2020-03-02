import React from 'react';
import '../assets/styles/Header.scss'
import logo from '../assets/sudoku.svg'

const Header = () => {

    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="logo" className="logo-imagen" />
                <h1 className="logo-nombre">Sudoku-Univalle</h1>
            </div>

            <div className="menu">

            </div>
        </header>
    );
}



export default Header
