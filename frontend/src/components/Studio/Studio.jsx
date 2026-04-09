import React from 'react';
import headphones from '../../assets/images/headphones.svg';

export const Studio = () => {
  return (
    <div className="studio">
      <div className="studio__content">
        <h3 className="studio__title">
          Un estudio para artistas que quieren elevar su música.
        </h3>
        <p className="studio_subtitle">
          Contamos con un entorno lleno de profesionales dedicados a traer a la
          vida tus ideas musicales.
        </p>
        <div className="studio__feature">
          <img
            src={headphones}
            alt="Icon of headphones"
            className="studio__icon"
          />
          <p className="studio__text">
            Ofrecemos servicio de mezcla y masterización musical profesional.
          </p>
        </div>
        <div className="studio__feature">
          <img
            src={headphones}
            alt="Icon of headphones"
            className="studio__icon"
          />
          <p className="studio__text">
            Ofrecemos servicio personalizado de producción musical profesional.
          </p>
        </div>
        <div className="studio__stats">
          <div className="studio__stat">
            <div className="studio__numbers">
              <h3 className="studio__number">10</h3>
              <p className="studio__plus">+</p>
            </div>
            <p className="studio__stat-text">Años de experiencia</p>
          </div>

          <div className="studio__line"></div>

          <div className="studio__stat">
            <div className="studio__numbers">
              <h3 className="studio__number">2k</h3>
              <p className="studio__plus">+</p>
            </div>
            <p className="studio__stat-text">Tracks producidas</p>
          </div>

          <div className="studio__line"></div>

          <div className="studio__stat">
            <div className="studio__numbers">
              <h3 className="studio__number">15</h3>
              <p className="studio__plus">+</p>
            </div>
            <p className="studio__stat-text">Artistas satisfechos</p>
          </div>
        </div>
      </div>
      <div className="studio__image"></div>
    </div>
  );
};
