import React, { useEffect, useRef, useState } from 'react';
import headerLogo from '../../assets/images/white_logo.png';
import { NavLink, Link } from 'react-router-dom';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const handleOutsideClick = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  const handleNavigate = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header" ref={headerRef}>
    <Link to='/home'>
      <img className="header__logo" src={headerLogo} alt="Rec-On Studio Logo" />
    </Link>
      <button
        type="button"
        className="header__menu-toggle"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        aria-expanded={isMobileMenuOpen}
        aria-controls="main-navigation"
        aria-label="Abrir menú de navegación"
      >
        <span className="header__menu-toggle-line"></span>
        <span className="header__menu-toggle-line"></span>
        <span className="header__menu-toggle-line"></span>
      </button>
      <nav
        id="main-navigation"
        className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}
      >
        <ul className="header__nav-list_left" onClick={() => setIsMobileMenuOpen(false)}>
          <li className="header__nav-list_left-item">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? 'header__nav-list_item_bold' : ''
              }
              onClick={handleNavigate}
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
              onClick={handleNavigate}
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
              onClick={handleNavigate}
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
              onClick={handleNavigate}
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
