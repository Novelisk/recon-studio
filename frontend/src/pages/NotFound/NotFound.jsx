import React from 'react';
import vinyl from '../../assets/images/Image_Vinyl.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  const handleToHome = () => {
    navigate('/home');
  };

  return (
    <div className="not-found">
      <h2 className="not-found__title">Error, Page Not Found</h2>
      <p className="not-found__numbers">
        4
        <img
          className="not-found__text-image"
          src={vinyl}
          alt="Image of a vynil record"
        />
        4
      </p>
      <p className="not-found__text-oops">Oooppsss!!!!</p>
      <p className="not-found__text-description">
        La página a la que intentas acceder no existe
      </p>
      <button
        type="button"
        className="not-found__button"
        onClick={handleToHome}
      >
        Volver al inicio
      </button>
    </div>
  );
};
