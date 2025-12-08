import React from 'react';

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
            Algo de lo que se ha grabado aquí.
          </h2>
          <p className="home__middle-container_header-description">
            Algunos de los artistas que han confiado su producción a nosotros.
          </p>
          <div className="home__middle-container_albums"></div>
        </div>
      </div>
    </section>
  );
};
