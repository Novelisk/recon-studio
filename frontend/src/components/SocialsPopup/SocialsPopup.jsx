import React from 'react';
import { FaInstagram, FaFacebook, FaSpotify, FaBandcamp } from 'react-icons/fa';

export const SocialsPopup = ({ links }) => {
  return (
    <div className="social-popup">
      {links.instagram && (
        <a
          href={links.instagram}
          className="social-popup__link"
          target="blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      )}

      {links.facebook && (
        <a
          href={links.facebook}
          className="social-popup__link"
          target="blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
      )}

      {links.spotify && (
        <a
          href={links.spotify}
          className="social-popup__link"
          target="blank"
          rel="noopener noreferrer"
          aria-label="Spotify"
        >
          <FaSpotify />
        </a>
      )}

      {links.bandcamp && (
        <a
          href={links.bandcamp}
          className="social-popup__link"
          target="blank"
          rel="noopener noreferrer"
          aria-label="Bandcamp"
        >
          <FaBandcamp />
        </a>
      )}
    </div>
  );
};
