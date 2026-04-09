import React from 'react';

const SERVICES = {
  voice: {
    title: 'Voice Recording',
    description:
      'Grabación de voces para tus proyectos de audio. Ya sea para podcasts, audiolibros o cualquier otro proyecto que requiera voces claras y profesionales, nuestro servicio de grabación de voces está aquí para ayudarte a dar vida a tus ideas.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d',
  },
  mastering: {
    title: 'Track Mastering',
    description:
      'Mejora y pulido de tus proyectos de audio para lograr un sonido profesional. Nuestro equipo de maestros expertos garantiza que tu música suene perfecta en cualquier dispositivo.',
    image: 'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2',
  },
  editing: {
    title: 'Audio Editing',
    description:
      'Edición de audio para mejorar la calidad y la claridad de tus grabaciones. Nuestro servicio de edición de audio se encarga de eliminar ruidos no deseados, ajustar niveles y mejorar la calidad general de tu audio.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
  },
  mixing: {
    title: 'Track Mixing',
    description:
      'Mezcla de pistas para lograr un sonido equilibrado y profesional. Nos aseguramos de que cada elemento de tu música se mezcle perfectamente para crear una experiencia auditiva excepcional.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  },
  recording: {
    title: 'Track Recording',
    description:
      'Grabación de pistas únicas o en conjunto con el mejor equipo de grabación. Nuestro servicio de grabación de pistas te permite capturar cada detalle de tu música con la más alta calidad, ya sea que estés grabando instrumentos, voces o cualquier otro elemento musical.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
  },
};

export const Services = () => {
  const [active, setActive] = React.useState('mastering');

  const service = SERVICES[active];

  return (
    <section className="services">
      <div className="services__tabs">
        <img
          src={service.image}
          alt={service.title}
          className="service__image"
        />
        {Object.keys(SERVICES).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={
              'services__tab ' + (active === key ? 'services__tab--active' : '')
            }
          >
            {SERVICES[key].title}
          </button>
        ))}
      </div>

      <div className="services__card">
        <h3 className="card__title">{service.title}</h3>
        <p className="card__description">{service.description}</p>
      </div>
    </section>
  );
};
