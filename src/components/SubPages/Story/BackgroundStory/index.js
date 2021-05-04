import React from "react"
import BackgroundStoryImg from "../../../../../static/assets/img/img2.png"

const BackgroundStory = () => (
  <section className="background-story section" id="background-story">
    <div className="bd-container">
      <span className="section-subtitle">Ahondemos más allá...</span>
      <h2 className="section-title">¿Cómo llegue a ser quién soy?</h2>
      <div className="summary__container bd-grid">
        <div className="summary__img">
          <img src={BackgroundStoryImg} alt="Autor del portfolio"></img>
        </div>
        <div className="summary__data">
          <div className="home__presentation">
            <h3 className="subtitle-paragraph text-xl">
              Mi trasfondo como diseñador
            </h3>
            <p>
              No poseo experiencia de manera académica en el diseño, pero la
              pasión por ello me llevo a aprenderlo de manera autodidacta, veía
              webs y apps hermosas a diario, me apasionaba y quería meterme de
              lleno en ello en algun momento.
            </p>
            <p>
              Yo estudié ingeniería de sistemas, así que lograr complementar mis
              habilidades de desarrollador con las de diseño no fue frustrante,
              me fue grato, con el objetivo de lograr webs y apps hermosas y
              fáciles de usar fue la mejor decisión que pude haber tomado.
            </p>
            <p>
              Empece a practicar diseño de interfaces de usuario desde el 2015
              sin conocimientos teóricos, entre idas y venidas el 2020 lo tomé
              más seriamente e hice cursos de diseño UI/UX para tener las bases
              correctas y así brindar un mejor trabajo.
            </p>
            <h3 className="subtitle-paragraph text-xl">
              Cuando no estoy diseñando...
            </h3>
            <p>
              Estoy aprendiendo nuevas habilidades que puedan complementarme
              tanto en lo profesional y como ser humano, a través de lectura de
              libros o viendo contenido en plataformas de video como youtube.
              También me gusta mucho ver review de tecnología y analizar
              emprendimientos que están dando que hablar en el mundo
            </p>
            <p className="font-bold">
              En caso de que quiera saber más sobre mí, mi trabajo o tenga
              alguna pregunta, no dude en{" "}
              <a href="mailto: devrogdesign@gmail.com"><span className="emphasis-text">
                enviar un correo electrónico en cualquier momento
              </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default BackgroundStory
