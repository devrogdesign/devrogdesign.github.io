import React from "react"
import SummaryImg from "../../../../../static/assets/img/img2.png"

const Summary = () => (
  <section className="summary section bd-container" id="summary">
    <span className="section-subtitle">Sobre mí</span>
    <h2 className="section-title">¿Quién soy yo?</h2>
    <div className="summary__container bd-grid">
      <div className="summary__data">
        <h1 className="summary__headline text-xxxl">
          Hola, soy Rodrigo García
        </h1>
        <h3 className="summary__subtitle text-xl">
          Diseñador UI & Desarrollador Web
        </h3>
        <div className="home__presentation">
          <p>
            Encantado de conocerte, soy un diseñador independiente, residiendo
            en Bolivia con 9 años de experiencia, mi trabajo se enfoca en crear
            hermosas experiencias de usuario para tus clientes a través de
            productos digitales.
          </p>
          <p>
            Me especializo en diseñar experiencias que tomen en cuenta la
            satisfacción de tus clientes y usuarios en todo momento, para así
            crear un lazo duradero entre ellos y tu producto o servicio.
          </p>
          <p>
            Pero, ¿Qué es lo que concretamente hago?<br></br>
            Diseño webs y también interfaces de aplicaciones móviles y web con
            el objetivo de que logres convertir tus visitantes en potenciales
            clientes, ¿Sabes? Hay una buena noticia, también soy desarrollador
            web, en ese ámbito te puedo ayudar en todo el ciclo de vida de tu
            proyecto, desde la idea hasta la implementación.
          </p>
        </div>
      </div>
      <div className="summary__img">
        <img src={SummaryImg} alt="Autor del portfolio"></img>
      </div>
    </div>
  </section>
)

export default Summary
