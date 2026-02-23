import React from 'react';
import { AlbumSlider } from '../AlbumSlider/AlbumSlider';

export const Albums = () => {
  return (
    <section className="albums">
      <div className="albums__header">
        <h2 className="albums__title">Albums producidos en casa</h2>
        <p className="albums__description">
          Algunos artistas que han confiado en nosotros.
        </p>
      </div>

      <AlbumSlider />
    </section>
  );
};
