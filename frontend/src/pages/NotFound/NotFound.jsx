import React from 'react';
import vynil from '../../assets/images/Image_Vinyl.png';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="not-found">
      <h2 className="not-found__title">Error, Page Not Found</h2>
      <p className="not-found__numbers">
        4
        <img
          className="not-found__text-image"
          src={vynil}
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
        onClick={() => <Link to="/home" />}
      >
        Volver al incio
      </button>
    </div>
  );
};
