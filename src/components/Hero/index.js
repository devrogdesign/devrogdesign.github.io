import React from "react"
import HomeImg from "../../../static/assets/img/img2.png"
import Button from "../Button"

const Hero = () => (
  <section className="home" id="home">
    <div className="home__container bd-container">
      <div className="home__data">
        <span className="home__greeting">
          Hola <span role="img" aria-label="Saludos">🖐</span>, Soy Rodrigo García, Diseñador UI & Desarrollador Web,{" "}
          <span className="text-available-indicator">
            disponible para trabajar
          </span>
        </span>
        <h1 className="home__headline text-xxl font-extrabold">Una excelente experiencia de usuario se traduce en el éxito de su negocio</h1>
        <span className="home__presentation">
          Soy un diseñador freelance, transformo tu idea en hermosos productos
          digitales, alineados con tus objetivos para satisfacer a tus usuarios
          y llevar <span className="font-bold">tu negocio al siguiente nivel</span>. Como soy un diseñador con
          conocimientos de programación, también puedo ayudarte en la
          implementación.
        </span>
        <div className="button__container">
          <Button href="https://t3bjfizqpcg.typeform.com/to/G9DIndPO"
            variant="button-cta"
            icon="right-arrow-alt"
            space="home-button-cta"
          >
            Consulta gratis
          </Button>
          <Button href="/#my-works">Mis trabajos</Button>
        </div>
      </div>

      <div className="home__img">
        <img src={HomeImg} alt="Autor del portfolio"></img>
      </div>
    </div>
  </section>
)

export default Hero
