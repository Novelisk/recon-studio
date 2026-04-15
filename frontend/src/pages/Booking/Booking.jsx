import React from 'react';

export const Booking = () => {
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
              <span className="booking__contact-value">+52 234 567 8901</span>
            </div>

            <div className="booking__contact-line">
              <span className="booking__contact-label booking__contact-value--mail">
                Correo:
              </span>
              <span className="booking__contact-value ">info@company.com</span>
            </div>
          </div>
        </aside>

        <form className="booking-form">
          <div className="booking-form__container">
            <label className="booking-form__label">
              Nombre completo<span>*</span>
              <input
                type="text"
                className="booking-form__input"
                placeholder="Ingresa tu nombre completo"
                required
              />
            </label>

            <label className="booking-form__label">
              Número de contacto<span>*</span>
              <input
                type="tel"
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
                className="booking-form__input booking-form__input--datetime"
                placeholder="Fecha y hora para tu visita"
                required
              />
            </label>

            <label className="booking-form__label">
              Tiempo a agendar<span>*</span>
              <select
                className="booking-form__input booking-form__input--select"
                required
              >
                <option value="">Selecciona duración</option>
                <option value="60">1 hora</option>
                <option value="90">1.5 horas</option>
                <option value="120">2 horas</option>
                <option value="150">2.5 horas</option>
                <option value="180">3 horas</option>
                <option value="210">3.5 horas</option>
                <option value="240">4 horas</option>
              </select>
            </label>
          </div>

          <label className="booking-form__label">
            Servicio a agendar<span>*</span>
            <select
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
              rows="4"
              placeholder="¿Tienes alguna solicitud especial?"
            ></textarea>
          </label>

          <button className="booking-form__button" type="submit">
            Reservar
          </button>
        </form>
      </div>
    </section>
  );
};
