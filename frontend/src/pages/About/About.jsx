import React, { useState, useEffect } from 'react';

export const About = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  // Close Modal on Escape key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <section className="about">
      <div className="about-header">
        <h1 className="about-header__title">El estudio</h1>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/036/483/161/small/ai-generated-interior-of-a-recording-studio-with-lots-of-equipment-ai-generative-photo.jpg"
          alt="Studio photo"
          className="about-header__image"
        />
      </div>

      <div className="about-team">
        <div className="about-team__header">
          <h2 className="about-team__title">Nuestro equipo</h2>
          <p className="about-team__paragraph">
            Somos un equipo de profesionales apasionados por la música y la
            producción musical. Nuestra experiencia nos permite ofrecer
            servicios de alta calidad a nuestros clientes y ayudarles a alcanzar
            sus objetivos musicales. Nos enorgullece trabajar con artistas de
            todos los géneros y niveles de experiencia, y estamos comprometidos
            a brindar un servicio excepcional en cada proyecto que emprendemos.
          </p>
        </div>

        <div className="about-team__grid">
          <div className="about-team__member">
            <img
              src="https://images.stockcake.com/public/a/1/3/a13b303a-a843-48e3-8c87-c0ac0314a282_large/intense-male-portrait-stockcake.jpg"
              alt="Team member 1"
              className="about-team__member-image"
            />
            <h3 className="about-team__member-name">Jorge Trejo</h3>
            <p className="about-team__member-role">
              Recording & Mixing Engineer
            </p>
          </div>
          <div className="about-team__member">
            <img
              src="https://images.stockcake.com/public/2/5/b/25b212d6-d108-450a-b6d1-d497cbe9d1e2_large/handsome-man-portrait-stockcake.jpg"
              alt="Team member 2"
              className="about-team__member-image"
            />
            <h3 className="about-team__member-name">Juan Puget</h3>
            <p className="about-team__member-role">
              Mixing & Mastering Engineer
            </p>
          </div>
          <div className="about-team__member">
            <img
              src="https://images.stockcake.com/public/6/e/5/6e533ef9-bd17-4594-9294-117b1d30afe3_large/classic-male-portrait-stockcake.jpg"
              alt="Team member 3"
              className="about-team__member-image"
            />
            <h3 className="about-team__member-name">Luxo López</h3>
            <p className="about-team__member-role">ADR | Sound Engineer</p>
          </div>
          <div className="about-team__member">
            <img
              src="https://img.freepik.com/free-photo/happy-woman-home-coronavirus-quarantine_53876-137722.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Team member 4"
              className="about-team__member-image"
            />
            <h3 className="about-team__member-name">Brenda Peña</h3>
            <p className="about-team__member-role">Producer</p>
          </div>
        </div>
      </div>

      <div className="about-studio">
        <div className="about-studio__header">
          <h2 className="about-studio__title">Nuestro estudio</h2>
          <p className="about-studio__paragraph">
            Nuestro estudio está equipado con las últimas tecnologías y equipos
            de alta calidad para garantizar la mejor experiencia de grabación y
            producción musical. Contamos con espacios diseñados para satisfacer
            las necesidades de los artistas, desde sesiones de grabación hasta
            post-producción.
          </p>
        </div>
        <div className="about-studio__grid">
          {/*CONTROL ROOM*/}
          <div className="about-studio__card">
            <div
              className="about-studio__grid-item"
              onClick={() => handleClick('control')}
            >
              <img
                src="https://www.shutterstock.com/image-photo/empty-control-room-filled-buttons-600nw-2450842423.jpg"
                alt="Control Room image"
                className="about-studio__grid-image"
              />
              <h2 className="about-studio__grid-title">Control Room</h2>
            </div>

            {activeTab === 'control' && (
              <div
                className={`about-studio__subgrid ${activeTab === 'control' ? 'open' : ''}`}
              >
                <div className="subgrid__subcard">
                  <img src="" alt="" className="subcard__image" />
                  <h3 className="subcard__title">Consola</h3>
                  <p className="subcard__description">
                    Descripción de la consola...
                  </p>
                </div>
                <div className="subgrid__subcard">
                  <img src="" alt="" className="subcard__image" />
                  <h3 className="subcard__title">Monitores</h3>
                  <p className="subcard__description">
                    Descripción de los monitores...
                  </p>
                </div>
                <div className="subgrid__subcard">
                  <img src="" alt="" className="subcard__image" />
                  <h3 className="subcard__title">Rack</h3>
                  <p className="subcard__description">
                    Descripción del rack...
                  </p>
                </div>
                <div className="subgrid__subcard">
                  <img src="" alt="" className="subcard__image" />
                  <h3 className="subcard__title">Pedales</h3>
                  <p className="subcard__description">
                    Descripción de los pedales...
                  </p>
                </div>
              </div>
            )}
          </div>

          {/*LIVE ROOM*/}
          <div className="about-studio__card">
            <div
              className="about-studio__grid-item"
              onClick={() => handleClick('live')}
            >
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/071/606/027/small/a-music-room-with-purple-walls-and-musical-instruments-photo.jpg"
                alt="Live Room image"
                className="about-studio__grid-image"
              />
              <h2 className="about-studio__grid-title">Live Room</h2>
            </div>

            {activeTab === 'live' && (
              <div
                className={`about-studio__subgrid ${activeTab === 'live' ? 'open' : ''}`}
              >
                <div
                  className="subgrid__subcard"
                  onClick={() =>
                    setSelectedItem({
                      title: 'Batería',
                      image:
                        'https://images.squarespace-cdn.com/content/v1/65943bb33d1b5c4164633d97/df9ae197-1674-4152-a3f4-60c164101af8/DSCF2882+%282%29.jpeg',
                      description:
                        'Descripción detallada de la batería, platos, atriles, pedales, etc...',
                    })
                  }
                >
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/65943bb33d1b5c4164633d97/df9ae197-1674-4152-a3f4-60c164101af8/DSCF2882+%282%29.jpeg"
                    alt=""
                    className="subcard__image"
                  />
                  <h3 className="subcard__title">Batería</h3>
                  <p className="subcard__description">
                    Descripción de la batería...
                  </p>
                </div>
                <div className="subgrid__subcard">
                  <img src="" alt="" className="subcard__image" />
                  <h3 className="subcard__title">Combo Orange</h3>
                  <p className="subcard__description">
                    Descripción del combo orange...
                  </p>
                </div>
                <div className="subgrid__subcard">
                  <img src="" alt="" className="subcard__image" />
                  <h3 className="subcard__title">Combo Laney</h3>
                  <p className="subcard__description ">
                    Descripción del combo laney...
                  </p>
                </div>
                <div className="subgrid__subcard">
                  <img src="" alt="" className="subcard__image" />
                  <h3 className="subcard__title">Amplificadores Fender</h3>
                  <p className="subcard__description">
                    Descripción de los amplificadores Fender...
                  </p>
                </div>
                <div className="subgrid__subcard">
                  <img src="" alt="" className="subcard__image" />
                  <h3 className="subcard__title">Combo Bajo</h3>
                  <p className="subcard__description">
                    Descripción del combo bajo...
                  </p>
                </div>
                <div className="subgrid__subcard">
                  <img src="" alt="" className="subcard__image" />
                  <h3 className="subcard__title">Microfonía</h3>
                  <p className="subcard__description">
                    Descripción de la microfonía...
                  </p>
                </div>
                <div className="subgrid__subcard">
                  <img src="" alt="" className="subcard__image" />
                  <h3 className="subcard__title">Monitoreo</h3>
                  <p className="subcard__description">
                    Descripción del monitoreo...
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {selectedItem && (
          <div className="modal" onClick={() => setSelectedItem(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="modal__image"
              />
              <h2 className="modal__title">{selectedItem.title}</h2>
              <p className="modal__description">{selectedItem.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
