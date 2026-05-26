import React from 'react';

const SERVICES = {
  voice: {
    title: 'Voice Recording',
    description:
      'Grabación de voces para tus proyectos de audio. Ya sea para podcasts, audiolibros o cualquier otro proyecto que requiera voces claras y profesionales, nuestro servicio de grabación de voces está aquí para ayudarte a dar vida a tus ideas.',
    image:
      'https://ik.imagekit.io/novelisk/Rec-On/voice-recording.png?tr=w-1200,q-75,f-webp',
  },
  mastering: {
    title: 'Track Mastering',
    description:
      'Mejora y pulido de tus proyectos de audio para lograr un sonido profesional. Nuestro equipo de maestros expertos garantiza que tu música suene perfecta en cualquier dispositivo.',
    image:
      'https://ik.imagekit.io/novelisk/Rec-On/track_mastering.jpg?tr=w-1200,q-75,f-webp',
  },
  editing: {
    title: 'Audio Editing',
    description:
      'Edición de audio para mejorar la calidad y la claridad de tus grabaciones. Nuestro servicio de edición de audio se encarga de eliminar ruidos no deseados, ajustar niveles y mejorar la calidad general de tu audio.',
    image:
      'https://ik.imagekit.io/novelisk/Rec-On/track_mixing2.jpg?tr=w-1200,q-75,f-webp',
  },
  mixing: {
    title: 'Track Mixing',
    description:
      'Mezcla de pistas para lograr un sonido equilibrado y profesional. Nos aseguramos de que cada elemento de tu música se mezcle perfectamente para crear una experiencia auditiva excepcional.',
    image:
      // 'https://ik.imagekit.io/novelisk/Rec-On/track_mixing.jpg?tr=w-1200,q-75,f-webp',
      'https://ik.imagekit.io/novelisk/Rec-On/Rec-On%20(12%20of%2026).jpg?updatedAt=1778612559658&tr=w-1200,q-75,f-webp',
  },
  recording: {
    title: 'Track Recording',
    description:
      'Grabación de pistas únicas o en conjunto con el mejor equipo de grabación. Nuestro servicio de grabación de pistas te permite capturar cada detalle de tu música con la más alta calidad, ya sea que estés grabando instrumentos, voces o cualquier otro elemento musical.',
    image:
      'https://ik.imagekit.io/novelisk/Rec-On/track_recording2.jpg?q-75,f-webp',
  },
  rehearsal: {
    title: 'Sala de ensayos',
    description:
      'Contamos con una sala de ensayos completamente equipada para que puedas practicar y preparar tus presentaciones en vivo. Nuestra sala de ensayos ofrece un ambiente cómodo y profesional para que puedas concentrarte en tu música y mejorar tus habilidades.',
    image: 'https://cdn.mos.cms.futurecdn.net/sLJnsjvf6zACPou8FEb4i5.jpg',
  },
};

const ServicesModal = () => {
  const [active, setActive] = React.useState('editing');

  const service = SERVICES[active];

  return (
    <div className="services-modal">
      <img
        src={service?.image}
        alt={service?.title}
        className="services-modal__background"
      />

      <div className="services-modal__tabs">
        {Object.keys(SERVICES).map((key) => (
          <div
            key={key}
            onMouseEnter={() => setActive(key)}
            className={
              'services-modal__tab ' +
              (active === key ? 'services-modal__tab--active' : '')
            }
          >
            <h3 className="services-modal__tab-title">{SERVICES[key].title}</h3>
          </div>
        ))}
      </div>

      <div className="services-modal__card">
        <h3 className="services-modal__card-title">{service?.title}</h3>
        <p className="services-modal__card-description">
          {service?.description}
        </p>
      </div>
    </div>
  );
};

export default ServicesModal;
