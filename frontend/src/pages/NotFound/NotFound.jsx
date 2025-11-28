import React from 'react';
import vynil from '../../assets/images/Image_Vinyl.png';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="not-found">
      <h2 className="not-found__title">Error, Not Found</h2>
      <p>
        4{' '}
        <span>
          {' '}
          <img src={vynil} alt="Image of a vynil record" />
        </span>
        4
      </p>
      <p>Oooppsss!!!!</p>
      <p>La página que intentas acceder no existe</p>
      <Link to="/home">Volver al inicio</Link>
    </div>
  );
};
