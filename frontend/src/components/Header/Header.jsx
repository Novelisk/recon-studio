import React from 'react';
import headerLogo from '../../assets/images/white_logo.png';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="header">
      <img src={headerLogo} alt="Rec-On Studio Logo" />
      <nav className="header__nav">
        <ul>
          <li>
            <NavLink to="/home">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/about">Acerda de nostros</NavLink>
          </li>
          <li>
            <NavLink to="/services">Servicios</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
