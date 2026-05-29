import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const Booking = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        formRef.current.reset();
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <section className="booking">
      <h1 className="booking__title">
        Agenda
        <br /> una visita
      </h1>

      <div className="booking-container">
        <aside className="booking__aside">
          <h2 className="booking__aside-title">Asegura tu lugar ahora</h2>
          <h3 className="booking__aside-subtitle">Contacto:</h3>
          <div className="booking__aside-contact">
            <div className="booking__contact-line">
              <span className="booking__contact-label">Dirección:</span>
              <span className="booking__contact-value">
                Retorno 809, El Centinela, Coyoacán, CDMX
              </span>
            </div>

            <div className="booking__contact-line">
              <span className="booking__contact-label">Teléfono:</span>
              <span className="booking__contact-value">+52 55 5156 3874</span>
            </div>

            <div className="booking__contact-line">
              <span className="booking__contact-label booking__contact-value--mail">
                Correo:
              </span>
              <span className="booking__contact-value ">
                reconstudiomx@gmail.com
              </span>
            </div>
          </div>
        </aside>

        <form className="booking-form" ref={formRef} onSubmit={handleSubmit}>
          <div className="booking-form__container">
            <label className="booking-form__label">
              Nombre completo<span>*</span>
              <input
                type="text"
                name="name"
                className="booking-form__input"
                placeholder="Ingresa tu nombre completo"
                required
              />
            </label>

            <label className="booking-form__label">
              Número de contacto<span>*</span>
              <input
                type="tel"
                name="phone"
                className="booking-form__input"
                placeholder="Ingresa tu número telefónico"
                required
              />
            </label>
          </div>

          <div className="booking-form__container">
            <label className="booking-form__label">
              Elegir fecha<span>*</span>
              <input
                type="date"
                name="date"
                className="booking-form__input booking-form__input--datetime"
                placeholder="Fecha y hora para tu visita"
                required
              />
            </label>

            <label className="booking-form__label">
              Tiempo a agendar<span>*</span>
              <select
                name="duration"
                className="booking-form__input booking-form__input--select"
                required
              >
                <option value="">Selecciona duración</option>
                <option value="60">1 hora</option>
                <option value="120">2 horas</option>
                <option value="180">3 horas</option>
                <option value="240">4 horas</option>
                <option value="360">6 horas</option>
                <option value="480">8 horas</option>
              </select>
            </label>
          </div>

          <label className="booking-form__label">
            Servicio a agendar<span>*</span>
            <select
              name="service"
              className="booking-form__input booking-form__input--select service"
              required
            >
              <option value="">Selecciona servicio</option>
              <option value="rehearsal">Ensayo</option>
              <option value="recording">Grabación</option>
              <option value="mixing">Mezcla</option>
              <option value="mastering">Mastering</option>
              <option value="tracking">Producción</option>
              <option value="other">Otro</option>
            </select>
          </label>

          <label className="booking-form__label">
            Comentarios adicionales
            <textarea
              className="booking-form__input booking-form__input--textarea comment"
              name="message"
              rows="4"
              placeholder="¿Tienes alguna solicitud especial?"
            ></textarea>
          </label>

          <div className="booking-form__button-container">
            <button
              className="booking-form__button"
              type="submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <>
                  <span className="spinner"></span> Enviando...
                </>
              ) : (
                'Reservar'
              )}
            </button>

            {/* User Feedback */}
            <div className="booking-form__feedback-container">
              {status === 'success' && (
                <div className="booking-form__feedback booking-form__feedback--success">
                  ¡Reserva enviada con éxito!
                </div>
              )}
              {status === 'error' && (
                <div className="booking-form__feedback booking-form__feedback--error">
                  Hubo un error al enviar la reserva. Por favor, inténtalo de
                  nuevo.
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
