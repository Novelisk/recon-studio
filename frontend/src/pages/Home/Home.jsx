import React from 'react';
import { AlbumSlider } from '../../components/AlbumSlider/AlbumSlider';
import headphones_icon from '../../assets/images/headphones_icon.png';

export const Home = () => {
  return (
    <section className="home">
      <div className="home__top-container">
        <h1 className="home__top-container_title">
          Producción que eleva tu música. <br /> Tu universo sonoro empieza
          aquí.
        </h1>
      </div>

      <div className="home__middle-container">
        <div className="home__middle-container_header">
          <h2 className="home__middle-container_header-title">
            Albums producidos en casa.
          </h2>
          <p className="home__middle-container_header-description">
            Algunos de los artistas que han confiado su producción a nosotros.
          </p>
        </div>
        <AlbumSlider />
      </div>

      <div className="home__middle-container_bottom">
        <div className="home__middle-container_bottom_description-container">
          <h3 className="home__middle-container_bottom_description-container_title">
            Un estudio para artistas que quieren elevar su música.
          </h3>
          <p className="home__middle-container_bottom_description-container_subtitle">
            Contamos con un entorno lleno de profesionales dedicados a traer a
            la vida tus ideas musicales.
          </p>
          <div className="home__middle-container_bottom_description-container_text-container">
            <img
              src={headphones_icon}
              alt="Icon of headphones"
              className="home__middle-container_bottom_description-container_text-container_image"
            />
            <p className="home__middle-container_bottom_description-container_text-container_text">
              Ofrecemos servicio de mezcla y masterización musical profesional.
            </p>
          </div>
          <div className="home__middle-container_bottom_description-container_text-container">
            <img
              src={headphones_icon}
              alt="Icon of headphones"
              className="home__middle-container_bottom_description-container_text-container_image"
            />
            <p className="home__middle-container_bottom_description-container_text-container_text">
              Ofrecemos servicio personalizado de producción musical
              profesional.
            </p>
          </div>
          <div className="home__middle-container_bottom_description-container_exp">
            <div className="home__middle-container_bottom_description-container_exp-container">
              <div className="home__middle-container_bottom_description-container_exp-container-container">
                <h3 className="home__middle-container_bottom_description-container_exp-container_number"></h3>
                <p className="home__middle-container_bottom_description-container_exp-container_plus"></p>
              </div>
              <p className="home__middle-container_bottom_description-container_exp-container_text"></p>
            </div>
            <hr />
            <div className="home__middle-container_bottom_description-container_exp-container">
              <h3 className="home__middle-container_bottom_description-container_exp-container_number"></h3>
              <p className="home__middle-container_bottom_description-container_exp-container_plus"></p>
              <p className="home__middle-container_bottom_description-container_exp-container_text"></p>
            </div>
            <hr />
            <div className="home__middle-container_bottom_description-container_exp-container">
              <h3 className="home__middle-container_bottom_description-container_exp-container_number"></h3>
              <p className="home__middle-container_bottom_description-container_exp-container_plus"></p>
              <p className="home__middle-container_bottom_description-container_exp-container_text"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
