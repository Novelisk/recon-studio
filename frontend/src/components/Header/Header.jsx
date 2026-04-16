import React from 'react';
import headerLogo from '../../assets/images/white_logo.png';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <img src={headerLogo} alt="Rec-On Studio Logo" />
      <nav className="header__nav">
        <ul className="header__nav-list_left">
          <li className="header__nav-list_left-item">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? 'header__nav-list_item_bold' : ''
              }
            >
              {({ isActive }) => (
                <div className="header__nav-list_item-container">
                  Inicio
                  {isActive && (
                    <span className="header__nav-list_item_span"></span>
                  )}
                </div>
              )}
            </NavLink>
          </li>
          <li className="header__nav-list_left-item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'header__nav-list_item_bold' : ''
              }
            >
              {({ isActive }) => (
                <div className="header__nav-list_item-container">
                  El estudio
                  {isActive && (
                    <span className="header__nav-list_item_span"></span>
                  )}
                </div>
              )}
            </NavLink>
          </li>
          <li className="header__nav-list_left-item">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? 'header__nav-list_item_bold' : ''
              }
            >
              {({ isActive }) => (
                <div className="header__nav-list_item-container">
                  Servicios
                  {isActive && (
                    <span className="header__nav-list_item_span"></span>
                  )}
                </div>
              )}
            </NavLink>
          </li>
          <li className="header__nav-list_left-item">
            <NavLink
              to="/booking"
              className={({ isActive }) =>
                isActive ? 'header__nav-list_item_bold' : ''
              }
            >
              {({ isActive }) => (
                <div className="header__nav-list_item-container">
                  Agenda una visita
                  {isActive && (
                    <span className="header__nav-list_item_span"></span>
                  )}
                </div>
              )}
            </NavLink>
          </li>
        </ul>
        <ul className="header__nav-list_right">
          <li className="header__nav-list_right-item">
            <h3>CONTACTO</h3>

            <div className="header__contact-dropdown">
              <div className="header__contact-container">
                <h5 className="header__contact-container--title">Dirección:</h5>
                <p className="header__contact-container--text">
                  Retorno 809, El Centinela, Coyoacán, CDMX
                </p>
              </div>

              <div className="header__contact-container">
                <h5 className="header__contact-container--title">Teléfono:</h5>
                <p className="header__contact-container--text">
                  +52 00 00 00 00
                </p>
              </div>

              <div className="header__contact-container">
                <h5 className="header__contact-container--title">Correo:</h5>
                <p className="header__contact-container--text">
                  jorge_t.g@hotmail.com
                </p>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
