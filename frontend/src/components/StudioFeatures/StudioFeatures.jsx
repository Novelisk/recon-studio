import React from 'react';
import headphones2 from '../../assets/images/headphones2.svg';
import speaker from '../../assets/images/speaker.svg';
import microphone from '../../assets/images/microphone.svg';
import mixer from '../../assets/images/mixer.svg';

export const StudioFeatures = () => {
  return (
    <section className="features">
      <div className="features__item features__item--equipment">
        <img
          src={headphones2}
          alt="Icon of headphones"
          className="item__image"
        />
        <h3 className="item__title">El mejor equipo</h3>
        <p className="item__paragraph">
          Contamos con herramientas de la mejor calidad para traer tu música a
          la vida con precisión.
        </p>
      </div>
      <div className="features__item features__item--quality">
        <img src={speaker} alt="Icon of speaker" className="item__image" />
        <h3 className="item__title">Calidad sonora</h3>
        <p className="item__paragraph">
          Nuestro equipo de sonido está optimizado para ofrecer la mejor calidad
          de audio posible.
        </p>
      </div>
      <div className="features__item features__item--instruments">
        <img
          src={microphone}
          alt="Icon of microphone"
          className="item__image"
        />
        <h3 className="item__title">Instrumentos</h3>
        <p className="item__paragraph">
          Contamos con instrumentos musicales de alta calidad para que puedas
          crear tu música perfecta.
        </p>
      </div>
      <div className="features__item features__item--sound">
        <img src={mixer} alt="Icon of mixer" className="item__image" />
        <h3 className="item__title">Mezcla de sonido</h3>
        <p className="item__paragraph">
          Nuestra mezcla de sonido está diseñada para ofrecer una experiencia
          auditiva única.
        </p>
      </div>
    </section>
  );
};
