import React from "react"
import ButtonLink from "../ButtonLink"

const Services = () => (
  <section className="services section bd-container">
    <span className="section-subtitle">Servicios</span>
    <h2 className="section-title">Lo que hago</h2>
    <p className="section-description">
      Puedo ayudarte desde el diseño hasta la codificación, siempre me gusta
      estar actualizado en el uso de herramientas, algunas de las que uso son
      figma, adobe XD, webflow y wordpress.
    </p>

    <div className="services__container wrapper bd-grid">
      <div className="card">
        <div className="card__header">
          <div className="card__icon">
            <box-icon 
            name="layer"
              type="regular"
              color="#010101"
              size="2rem"></box-icon>
          </div>
          <h3 className="card__title">Desarrollo Web</h3>
          <div className="card__description">
          Creo sitios web de alta calidad que se cargan rápidamente aplicando buenas prácticas de SEO.
          </div>
        </div>

        <div className="card__content">
          <div className="tag-services">
            <ul>
              <li className="label label-red">Landing Page</li>
              <li className="label label-red">Website Personal y Corporativa</li>
              <li className="label label-red">Ecommerce</li>
              <li className="label label-red">Webs con Webflow o Wordpress</li>
            </ul>
            <a href="https://t3bjfizqpcg.typeform.com/to/G9DIndPO" className="button">
            Necesito esto
            </a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card__header">
          <div className="card__icon">
          <box-icon 
          name="vector"
              type="regular"
              color="#010101"
              size="2rem"></box-icon>
          </div>
          <h3 className="card__title">Diseño Mobile & Web App</h3>
          <div className="card__description">
          Diseño interfaces móviles y web aplicando buenas prácticas de UI & UX en todo momento.
          </div>
        </div>

        <div className="card__content">
          <div className="tag-services">
            <ul>
              <li className="label label-blue">Websites</li>
              <li className="label label-blue">Mobile & Web App</li>
              <li className="label label-blue">Prototipado y Animación</li>
              <li className="label label-blue">Sistema de Diseño</li>
              <li className="label label-blue">Diseño UX/UI</li>
            </ul>
            <a href="https://t3bjfizqpcg.typeform.com/to/G9DIndPO" className="button">
            Necesito esto
            </a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card__header">
          <div className="card__icon">
          <box-icon 
          name="code-block"
              type="regular"
              color="#010101"
              size="2rem"></box-icon>
          </div>
          <h3 className="card__title">Desarrollo Frontend</h3>
          <div className="card__description">
          Creo aplicaciones web o sitios web personalizados con tecnologías como React y otras.
          </div>
        </div>

        <div className="card__content">
          <div className="tag-services">
            <ul>
              <li className="label label-green">Frontend con React</li>
              <li className="label label-green">CMS</li>
              <li className="label label-green">Diseño Responsivo</li>
              <li className="label label-green">Optimización Web</li>
            </ul>
            
          </div>
          <a href="https://t3bjfizqpcg.typeform.com/to/G9DIndPO" className="button">
              Necesito esto
            </a>
        </div>
      </div>
    </div>
    <div className="section-support-content">
      <ButtonLink href="/my-story/#knowledge">Más sobre mis habilidades</ButtonLink>
    </div>
  </section>
)

export default Services
