import React from 'react';

export const Policy = () => {
  return (
    <section className="policy">
      <div className="policy-header">
        <h1 className="policy-header__title">POLÍTICA DE PRIVACIDAD.</h1>
        <div className="policy-header__container">
          <p className="policy-header__subtitle">Rec-On Studio</p>
          <p className="policy-header__subtitle">
            Úlima actualización: Abril 2026.
          </p>
        </div>
      </div>

      <div className="policy-content" id="1">
        <h2 className="policy-content__title">
          1. Responsable del manejo de datos.
        </h2>
        <p className="policy-content__paragraph">
          Rec-On Studio, con domicilio en Ciudad de México, México, y
          representado por el Ing. Jorge Trejo Gandarias, es responsable del
          tratamiento de los datos personales recabados a través de este sitio
          web.
        </p>
        <p className="policy-content__paragraph policy-content__paragraph--bottom">
          Para cualquier duda o solicitud relacionada con la privacidad de tus
          datos, puedes contactarnos en:
          <span> jorge_t.g@hotmail.com</span>
        </p>
      </div>

      <div className="policy-content" id="2">
        <h2 className="policy-content__title">2. Datos que recopilamos.</h2>
        <p className="policy-content__paragraph">
          A través de nuestro formulario de contacto, recopilamos los siguientes
          datos personales:
        </p>
        <ul className="policy-content__list">
          <li className="policy-content__list-item">Nombre.</li>
          <li className="policy-content__list-item">Número telefónico.</li>
          <li className="policy-content__list-item">Correo electrónico.</li>
          <li className="policy-content__list-item">
            Mensaje (incluyendo información sobre el servicio solicitado).
          </li>
        </ul>
      </div>

      <div className="policy-content" id="3">
        <h2 className="policy-content__title">
          3. Finalidad del uso de lo datos.
        </h2>
        <p className="policy-content__paragraph">
          Los datos personales proporcionados serán utilizados únicamente para:
        </p>
        <ul className="policy-content__list">
          <li className="policy-content__list-item">
            Dar respuesta a solicitudes de información.
          </li>
          <li className="policy-content__list-item">
            Gestionar solicitudes de servicios (ensayo, grabación, mezcla,
            mastering, producción).
          </li>
          <li className="policy-content__list-item">
            Establecer comunicación con el usuario.
          </li>
        </ul>
        <p className="policy-content__paragraph policy-content__paragraph--bottom">
          Rec-On Studio no utiliza los datos para fines publicitarios ni los
          comparte con terceros.
        </p>
      </div>

      <div className="policy-content" id="4">
        <h2 className="policy-content__title">4. Uso de tecnologías.</h2>
        <p className="policy-content__paragraph">Este sitio web:</p>
        <ul className="policy-content__list">
          <li className="policy-content__list-item">No utiliza cookies.</li>
          <li className="policy-content__list-item">
            No utiliza herramientas de análisis o rastreo.
          </li>
          <li className="policy-content__list-item">
            Utiliza EmailJS como servicio para el envío de formularios de
            contacto.
          </li>
        </ul>
      </div>

      <div className="policy-content" id="5">
        <h2 className="policy-content__title">5. Protección de datos.</h2>
        <p className="policy-content__paragraph">
          Rec-On Studio se compromete a proteger la información personal
          proporcionada por los usuarios y a utilizarla de manera responsable,
          evitando accesos no autorizados.
        </p>
      </div>

      <div className="policy-content" id="6">
        <h2 className="policy-content__title">6. Derechos del usuario.</h2>
        <p className="policy-content__paragraph">El usuario tiene derecho a:</p>
        <ul className="policy-content__list">
          <li className="policy-content__list-item">
            Acceder a sus datos personales.
          </li>
          <li className="policy-content__list-item">
            Solicitar la correción o eliminación de los mismos.
          </li>
          <li className="policy-content__list-item">
            Limitar u oponerse a su uso.
          </li>
        </ul>
        <p className="policy-content__paragraph policy-content__paragraph--bottom">
          Para ejercer estos derechos, deberá enviar una solicitud al correo
          indicado.
        </p>
      </div>

      <div className="policy-content" id="7">
        <h2 className="policy-content__title">7. Cambios en la política.</h2>
        <p className="policy-content__paragraph">
          Rec-On Studio se reserva el derecho de modificar esta política de
          privacidad en cualquier momento. Cualquier cambio será publicado en
          esta misma página.
        </p>
      </div>
    </section>
  );
};
