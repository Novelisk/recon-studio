import React from 'react';

export const Terms = () => {
  return (
    <section className="terms">
      <div className="terms-header">
        <h1 className="terms-header__title">TÉRMINOS Y CONDICIONES.</h1>
        <div className="terms-header__container">
          <p className="terms-header__subtitle">Rec-On Studio</p>
          <p className="terms-header__subtitle">
            Úlima actualización: Abril 2026.
          </p>
        </div>
      </div>

      <div className="terms-content" id="1">
        <h2 className="terms-content__title">1. Uso del sitio.</h2>
        <p className="terms-content__paragraph">
          Este sitio web tiene fines informativos y de contacto. Al utilizarlo,
          el usuario acepta los presentes términos y condiciones.
        </p>
      </div>

      <div className="terms-content" id="2">
        <h2 className="terms-content__title">2. Servicios ofrecidos.</h2>
        <p className="terms-content__paragraph">
          Rec-On Studio ofrece los siguientes servicios:
        </p>
        <ul className="terms-content__list">
          <li className="terms-content__list-item">Ensayo (sala de ensayo).</li>
          <li className="terms-content__list-item">Grabación.</li>
          <li className="terms-content__list-item">Mezcla.</li>
          <li className="terms-content__list-item">Mastering.</li>
          <li className="terms-content__list-item">Producción musical.</li>
        </ul>
        <p className="terms-content__paragraph"></p>
      </div>

      <div className="terms-content" id="3">
        <h2 className="terms-content__title">
          3. Reservaciones y cancelaciones.
        </h2>
        <ul className="terms-content__list">
          <li className="terms-content__list-item">
            Las reservaciones deberán realizarse previamente mediante contacto.
          </li>
          <li className="terms-content__list-item">
            En caso de cancelación, se solicita notificar con anticipación
            razonable.
          </li>
          <li className="terms-content__list-item">
            Rec-On Studio se reserva el derecho de aplicar cargos o
            restricciones en caso de cancelaciones frecuentes o sin aviso.
          </li>
        </ul>
      </div>

      <div className="terms-content" id="4">
        <h2 className="terms-content__title">4. Reembolsos.</h2>
        <ul className="terms-content__list">
          <li className="terms-content__list-item">
            Los reembolsos serán evaluados caso por caso.
          </li>
          <li className="terms-content__list-item">
            No se garantiza el reembolso en servicios ya iniciados o
            completados.
          </li>
        </ul>
      </div>

      <div className="terms-content" id="5">
        <h2 className="terms-content__title">5. Entrega de archivos.</h2>
        <ul className="terms-content__list">
          <li className="terms-content__list-item">
            Los archivos finales serán entregados en el formato acordado con el
            cliente.
          </li>
          <li className="terms-content__list-item">
            Rec-On Studio no se responsabiliza por la pérdida de archivos una
            vez entregados, por lo que se recomienda al cliente realizar
            respaldos.
          </li>
        </ul>
      </div>

      <div className="terms-content" id="6">
        <h2 className="terms-content__title">6. Derechos de autor.</h2>
        <ul className="terms-content__list">
          <li className="terms-content__list-item">
            Todos los derechos de autor del material pertenecen al cliente,
            salvo acuerdo distinto.
          </li>
          <li className="terms-content__list-item">
            Rec-On Studio no reclama propiedad sobre el contenido producido.
          </li>
        </ul>
      </div>

      <div className="terms-content" id="7">
        <h2 className="terms-content__title">7. Uso de material.</h2>
        <p className="terms-content__paragraph">
          Rec-On Studio podrá utilizar fragmentos del material grabado, mezclado
          o producido con fines promocionales (portafolio, redes sociales,
          etc.), salvo que el cliente solicite lo contrario de manera expresa.
        </p>
      </div>

      <div className="terms-content" id="8">
        <h2 className="terms-content__title">8. Responsabilidad.</h2>
        <p className="terms-content__paragraph">
          Rec-On Studio no se hace responsable por:
        </p>
        <ul className="terms-content__list">
          <li className="terms-content__list-item">
            Uso indebido del material por parte del cliente.
          </li>
          <li className="terms-content__list-item">
            Daños derivados del uso de los servicios.
          </li>
          <li className="terms-content__list-item">
            Pérdidas indirectas o consecuenciales.
          </li>
        </ul>
      </div>

      <div className="terms-content" id="9">
        <h2 className="terms-content__title">9. Modificaciones</h2>
        <p className="terms-content__paragraph">
          Rec-On Studio se reserva el derecho de modificar estos términos en
          cualquier momento. Las modificaciones entrarán en vigor al ser
          publicadas.
        </p>
      </div>
    </section>
  );
};
