import React from "react"
import ButtonLink from "../ButtonLink"

const About = () => (
  <section className="about section section__padding-off" id="about">
    <div className="bd-container">
      <div className="about__container wrapper wrapper__center">
        <h2 className="section-title biggest-title">
          Pienso de forma diferente,
          <br /> creo hermosas experiencias
        </h2>
        <p className="about__description support-copy font-bold">
          Un poco sobre mí, me apasiona el diseño, pero diseñar teniendo en
          cuenta la experiencia del usuario, no solo quiero hacer productos
          bonitos sino también usables. Me gustaría ayudarte a descubrir la
          mejor solución para tus necesidades y las de tus usuarios para
          encaminar tu negocio hacia el éxito.
        </p>
        <div className="section-support-content">
          <ButtonLink href="/my-story">Más sobre mi</ButtonLink>
        </div>
      </div>
    </div>
  </section>
)

export default About
