import React from "react"
import ButtonLink from "../ButtonLink"

const AsWork = () => (
  <section className="as-work section bd-container" id="as-work">
    <span className="section-subtitle">Mi proceso</span>
    <h2 className="section-title">Los pasos de mi proceso creativo </h2>
    <p className="section-description">
    Esta es mi forma de trabajar, la utilizo para conseguir los objetivos acordados y evitar malentendidos y retrasos.
    </p>

    <div className="as-work__container wrapper bd-grid">
      <div className="card">
        <div className="card__header">
          <div className="card__icon">
            <div className="box__icon">
              <box-icon
              name="line-chart"
              type="regular"
              color="#010101"
              size="1.2rem">
              </box-icon>
            </div>
          </div>
          <h3 className="card__title">
            <span style={{ fontWeight: "800" }}>1.</span> Estrategia
          </h3>
          <div className="card__description">
          Trazo la estrategia basada en estudios de su idea o negocio junto contigo.
          </div>
        </div>

        <div className="card__content"></div>
      </div>
      <div className="card">
        <div className="card__header">
          <div className="card__icon">
            <div className="box__icon">
            <box-icon
            name="paint"
              type="regular"
              color="#010101"
              size="1.2rem">
              </box-icon>
          </div>
          </div>
          <h3 className="card__title">
            <span style={{ fontWeight: "800" }}>2.</span> Diseño
          </h3>
          <div className="card__description">
          Establezco la usabilidad y apariencia que se aplicará en el proyecto.
          </div>
        </div>

        <div className="card__content"></div>
      </div>
      <div className="card">
        <div className="card__header">
          <div className="card__icon">
            <div className="box__icon">
            <box-icon 
            name="code"
              type="regular"
              color="#010101"
              size="1.2rem">
              </box-icon>
            </div>
          </div>
          <h3 className="card__title">
            <span style={{ fontWeight: "800" }}>3.</span> Desarrollo
          </h3>
          <div className="card__description">
          Implemento el proyecto con las tecnologías adecuadas.
          </div>
        </div>

        <div className="card__content"></div>
      </div>
      <div className="card">
        <div className="card__header">
          <div className="card__icon">
            <div className="box__icon">
            <box-icon
              name="wrench"
              type="regular"
              color="#010101"
              size="1.2rem">
              </box-icon>
            </div>
          </div>
          <h3 className="card__title">
            <span style={{ fontWeight: "800" }}>4.</span> Mejora
          </h3>
          <div className="card__description">
          Realizo una revisión general para pulir y corregir los últimos detalles.
          </div>
        </div>

        <div className="card__content"></div>
      </div>
      <div className="card">
        <div className="card__header">
          <div className="card__icon">
            <div className="box__icon">
            <box-icon 
            name="rocket"
              type="regular"
              color="#010101"
              size="1.2rem">
              </box-icon>
            </div>
          </div>
          <h3 className="card__title">
            <span style={{ fontWeight: "800" }}>5.</span> Entrega
          </h3>
          <div className="card__description">
          Finalmente, preparo todo y entrego el proyecto completo según lo acordado.
          </div>
        </div>

        <div className="card__content"></div>
      </div>
    </div>
    <div className="section-support-content">
      <ButtonLink href='#'>Más detalles de mi proceso creativo</ButtonLink>
    </div>
  </section>
)

export default AsWork
