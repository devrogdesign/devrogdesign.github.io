import React from "react"
import HomeImg from "../../../static/assets/img/aquivoyyo.jpg"
import Button from "../Button"

const Hero = () => (
  <section className="home" id="home">
    <div className="home__container bd-container">
      <div className="home__data">
        <span className="home__greeting">
          Hey 🖐, I’m Rodrigo García, Product Designer,{" "}
          <span className="text-available-indicator">available for work</span>
        </span>
        <h1 className="home__headline">Beautifully Crafted Web Experiences</h1>
        <span className="home__presentation">
          Currently designing thoughtful experiences at InVision to help
          designers, product managers and engineers collaborate better together.
        </span>
        <div className="button__container">
          <Button variant="button-cta" icon="right-arrow-alt" space="home-button-cta">Free consultation</Button>
          <Button>Check my works</Button>
        </div>
      </div>

      <div className="home__img">
        <img src={HomeImg} alt="Autor del portfolio"></img>
      </div>
    </div>
  </section>
)

export default Hero
