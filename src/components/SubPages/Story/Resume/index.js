import React from "react"
import ButtonLink from "../../../ButtonLink"

const Resume = () => (
  <section className="resume section bd-container" id="resume">
    <span className="section-subtitle">Mi resumen CV</span>
    <h2 className="section-title">
      Toda mi experiencia resumida en un par de páginas
    </h2>
    <p className="section-description">
      Tengo 9 años de experiencia en el rubro, tomando en cuenta mi etapa de
      estudios y mi faceta laboral como freelancer, si quieres saber más
      detalles, puedes consultar mi currículum.
    </p>
    <div className="section-support-content">
      <ButtonLink href="#">Visualizar CV</ButtonLink>
    </div>
  </section>
)

export default Resume
