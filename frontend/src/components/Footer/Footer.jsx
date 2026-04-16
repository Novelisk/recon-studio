import React from 'react';
import { Link } from 'react-router-dom';

import mapPin from '../../assets/images/map_pin.png';
import phoneIcon from '../../assets/images/phone-classic.png';
import facebookIcon from '../../assets/images/Facebook_icon.png';
import instragramIcon from '../../assets/images/Instagram_icon.png';
import emailIcon from '../../assets/images/email_icon_white.svg';
import heartIcon from '../../assets/images/heart-icon.svg';

export const Footer = () => {
  return (
    <>
      <div className="line"></div>
      <footer className="footer">
        <div className="footer__contact">
          <div className="footer__contact-container">
            <img
              src={mapPin}
              alt="Map pin icon"
              className="footer__contact_icon"
            />
            <p className="footer__contact_address">
              Retorno 809 - 15, El Centinela, Coyoacán, CDMX
            </p>

            <img
              src={phoneIcon}
              alt="Classic phone icon"
              className="footer__contact_icon"
            />
            <p className="footer__contact_phone-number">(52) 555 156 3874</p>

            <img
              src={emailIcon}
              alt="E-mail icon"
              className="footer__contact_icon footer__contact_icon_email"
            />
            <p className="footer__contact_email">jorge_t.g@hotmail.com</p>
          </div>

          <div className="footer__legal">
            <Link
              to="/policy"
              className="footer__legal-item"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Política de Privacidad
            </Link>
            <Link
              to="/terms"
              className="footer__legal-item"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Términos & Condiciones
            </Link>
          </div>

          <div className="footer__socials">
            <p className="footer__socials_text">Redes:</p>
            <a
              href="https://www.instagram.com/reconstudiomx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instragramIcon}
                alt="Instagram Icon"
                className="footer__socials_icon"
              />
            </a>

            <a
              href="https://www.facebook.com/reconstudiomx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebookIcon}
                alt="Facebook Icon"
                className="footer__socials_icon footer__socials_icon-last"
              />
            </a>
          </div>
        </div>

        <div className="footer__copyright">
          Copyright &copy; 2025 Rec-On Studio. Todos los derechos resevados.
        </div>

        <div className="footer__author">
          Built with
          <span>
            <img
              src={heartIcon}
              alt="Golden heart icon"
              className="footer__author-image"
            />
          </span>
          by{' '}
          <span>
            <a
              href="https://novelisk.dev/"
              className="footer__author-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              NOVELISK
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};
