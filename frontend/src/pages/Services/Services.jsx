import React, { useRef } from 'react';

import ServicesModal from '../../components/ServicesModal/ServicesModal';

import notesIcon from '../../assets/images/notes-icon.svg';
import peopleIcon from '../../assets/images/users-icon.svg';
import microphoneIcon from '../../assets/images/microphone-icon.svg';
import starIcon from '../../assets/images/star-icon.svg';
import doubleQuoteIcon from '../../assets/images/double-quote-icon.svg';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Juan Pérez',
    role: 'Cliente',
    title: 'Profesionales y comprometidos con la calidad. Recomendado.',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
    portrait:
      'https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg',
  },
  {
    id: 2,
    name: 'María García',
    role: 'Cliente',
    title: 'Profesionales y comprometidos con la calidad. Recomendado.',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
    portrait:
      'https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg',
  },
  {
    id: 3,
    name: 'María García',
    role: 'Cliente',
    title: 'Profesionales y comprometidos con la calidad. Recomendado.',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
    portrait:
      'https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg',
  },
  {
    id: 4,
    name: 'María García',
    role: 'Cliente',
    title: 'Profesionales y comprometidos con la calidad. Recomendado.',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
    portrait:
      'https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg',
  },
  {
    id: 5,
    name: 'María García',
    role: 'Cliente',
    title: 'Profesionales y comprometidos con la calidad. Recomendado.',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
    portrait:
      'https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg',
  },
  {
    id: 6,
    name: 'María García',
    role: 'Cliente',
    title: 'Profesionales y comprometidos con la calidad. Recomendado.',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
    portrait:
      'https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg',
  },
  {
    id: 7,
    name: 'María García',
    role: 'Cliente',
    title: 'Profesionales y comprometidos con la calidad. Recomendado.',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
    portrait:
      'https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg',
  },
  {
    id: 8,
    name: 'María García',
    role: 'Cliente',
    title: 'Profesionales y comprometidos con la calidad. Recomendado.',
    content:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
    portrait:
      'https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg',
  },
];

export const Services = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const amount = 300;

    container.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <h1 className="services__title">Servicios</h1>
      <img
        src="https://png.pngtree.com/background/20250103/original/pngtree-condenser-microphone-close-up-in-music-recording-studio-picture-image_15463756.jpg"
        alt="Services title"
        className="services__image"
      />

      <section className="services">
        <div className="services-header">
          <h2 className="services-header__title">Explora nuestros servicios</h2>
          <p className="services-header__description">
            Descubre una amplia gama de servicios profesionales disñeados para
            satisfacer tus necesidades. Entregamos calidad y experiencia en cada
            paso y decisión que tomamos.
          </p>
        </div>

        <ServicesModal />

        <div className="services-work">
          <div className="services-work__header">
            <h3 className="services-work__title">¿Cómo trabajamos?</h3>
            <p className="services-work__description">
              Nos centramos en la colaboración transparente, profesional y
              eficiente para lograr resultados excepcionales en tu meta.
              Trabajamos desde el más mínimo detalle para alcanzar tu objetivo.
            </p>
          </div>

          <div className="services-work__cards">
            <div className="services__card--1">
              <img
                src={notesIcon}
                alt="Notes icon"
                className="services__card-image"
              />
              <h4 className="services__card-title">Agenda tu visita</h4>
              <p className="services__card-description">
                Programa una cita con nuestros expertos para recibir
                asesoramiento personalizado.
              </p>
              <span className="services__card-number">01</span>
            </div>

            <div className="services__card--2">
              <span className="services__card-number">02</span>
              <img
                src={peopleIcon}
                alt="People icon"
                className="services__card-image"
              />
              <h4 className="services__card-title">
                Obtén asesoramiento personalizado
              </h4>
              <p className="services__card-description">
                Obtén una asesoría completa y especializada por nuestros
                expertos para brindarte un camino guiado en la visión de tu
                proyecto.
              </p>
            </div>

            <div className="services__card--3">
              <img
                src={microphoneIcon}
                alt="Microphone icon"
                className="services__card-image"
              />
              <h4 className="services__card-title">Servicio Profesional</h4>
              <p className="services__card-description">
                Garantizamos una ejecución precisa y un servicio de excelencia
                en todas las fases de su producción musical.
              </p>
              <span className="services__card-number">03</span>
            </div>
          </div>
        </div>

        <div className="services__stats">
          <div className="services__stat">
            <div className="services__numbers">
              <h3 className="services__number">10</h3>
              <p className="services__plus">+</p>
            </div>
            <p className="services__stat-text">Años de experiencia</p>
          </div>

          <div className="services__line"></div>

          <div className="services__stat">
            <div className="services__numbers">
              <h3 className="services__number">2k</h3>
              <p className="services__plus">+</p>
            </div>
            <p className="services__stat-text">Tracks producidas</p>
          </div>

          <div className="services__line"></div>

          <div className="services__stat">
            <div className="services__numbers">
              <h3 className="services__number">15</h3>
              <p className="services__plus">+</p>
            </div>
            <p className="services__stat-text">Artistas satisfechos</p>
          </div>

          <div className="services__line"></div>

          <div className="services__stat">
            <div className="services__numbers">
              <h3 className="services__number">10</h3>
              <p className="services__plus">+</p>
            </div>
            <p className="services__stat-text">Álbums de estudio</p>
          </div>
        </div>

        <div className="services-testimonials">
          <button
            className="services__carousel-btn left"
            onClick={() => scroll('left')}
          >
            &#8249;
          </button>

          <div className="services-testimonials__header">
            <h3 className="services-testimonials__title">Testimonios</h3>
            <p className="services-testimonials__description">
              Descubre lo que nuestros clientes tienen que decir sobre su
              experiencia en el proceso creativo en nuestro estudio. Sus
              historias reflejan la pasión, dedicación y resultados
              excepcionales que ofrecemos en cada proyecto.
            </p>
          </div>

          <div className="services-testimonials__content" ref={scrollRef}>
            {TESTIMONIALS.map((testimonial) => (
              <div className="services__testimonial" key={testimonial.id}>
                <div className="services__testimonial-header">
                  <img
                    src={testimonial.portrait}
                    alt={testimonial.name}
                    className="services__testimonial-portrait"
                  />
                  <div className="services__testimonial-container">
                    <h5 className="services__testimonial-name">
                      {testimonial.name}
                    </h5>
                    <p className="services__testimonial-role">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="services__testimonial-stars">
                  <img
                    src={starIcon}
                    alt="Star icon"
                    className="services__testimonial-star"
                  />
                  <img
                    src={starIcon}
                    alt="Star icon"
                    className="services__testimonial-star"
                  />
                  <img
                    src={starIcon}
                    alt="Star icon"
                    className="services__testimonial-star"
                  />
                  <img
                    src={starIcon}
                    alt="Star icon"
                    className="services__testimonial-star"
                  />
                  <img
                    src={starIcon}
                    alt="Star icon"
                    className="services__testimonial-star"
                  />
                </div>

                <h6 className="services__testimonial-title">
                  {testimonial.title}
                </h6>
                <p className="services__testimonial-text">
                  {testimonial.content}
                </p>

                <img
                  src={doubleQuoteIcon}
                  alt="Double quote icon"
                  className="services__testimonial-quote-icon"
                />
              </div>
            ))}
          </div>
          <button
            className="services__carousel-btn right"
            onClick={() => scroll('right')}
          >
            &#8250;
          </button>
        </div>
      </section>
    </>
  );
};
