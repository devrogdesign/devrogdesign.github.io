import React from "react"
import ButtonLink from "../ButtonLink"
import { useInView } from "react-intersection-observer"

const About = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  })

  return (
    <section
      className={`about section${
        inView ? " animate__animated animate__fadeInRight animate__slow" : ""
      }`}
      id="about"
      ref={ref}
    >
      <div className="bd-container">
        <div className="about__container">
          <h2 className="section-title biggest-title">
            I think differently,
            <br /> I create beautiful experiences {inView}
          </h2>
          <p className="about__description support-copy">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s
          </p>
        </div>
        <div className="section-support-content">
          <ButtonLink href="#">More about me</ButtonLink>
        </div>
      </div>
    </section>
  )
}

export default About
