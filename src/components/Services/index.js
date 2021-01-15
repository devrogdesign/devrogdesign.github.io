import React from "react"
import { useInView } from "react-intersection-observer"

const Services = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  })

  return (
    <section
      className={`services section bd-container${
        inView ? " animate__animated animate__fadeInLeft animate__slow" : ""
      }`}
      ref={ref}
    >
      <span className="section-subtitle">Services</span>
      <h2 className="section-title">What I do</h2>
      <p className="section-description">
        This is my way of working, I use it to achieve the objectives as agreed
        and avoid misunderstandings and delays.
      </p>

      <div className="services__container wrapper wrapper__content bd-grid">
        <div className="card">
          <div className="card__header">
            <div className="card__icon">
              <box-icon
                name="layer"
                type="regular"
                color="#010101"
                size="2rem"
              ></box-icon>
            </div>
            <h3 className="card__title">Website Development</h3>
            <div className="card__description">
              Creating engaging product and brand stories, supported by the
              latest UX strategies.
            </div>
          </div>

          <div className="card__content">
            <div className="tag-services">
              <ul>
                <li className="label label-red">Mobile App</li>
                <li className="label label-red">Web UI</li>
                <li className="label label-red">Design System</li>
                <li className="label label-red">User Experience Design</li>
                <li className="label label-red">Motion Design</li>
              </ul>
              <a href="#" className="button">
                I need this
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
                size="2rem"
              ></box-icon>
            </div>
            <h3 className="card__title">Mobile & Web App Design</h3>
            <div className="card__description">
              Creating engaging product and brand stories, supported by the
              latest UX strategies.
            </div>
          </div>

          <div className="card__content">
            <div className="tag-services">
              <ul>
                <li className="label label-blue">Mobile App</li>
                <li className="label label-blue">Web UI</li>
                <li className="label label-blue">Design System</li>
                <li className="label label-blue">User Experience Design</li>
                <li className="label label-blue">Motion Design</li>
              </ul>
              <a href="#" className="button">
                I need this
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
                size="2rem"
              ></box-icon>
            </div>
            <h3 className="card__title">Frontend Development</h3>
            <div className="card__description">
              Creating engaging product and brand stories, supported by the
              latest UX strategies.
            </div>
          </div>

          <div className="card__content">
            <div className="tag-services">
              <ul>
                <li className="label label-green">Mobile App</li>
                <li className="label label-green">Web UI</li>
                <li className="label label-green">Design System</li>
                <li className="label label-green">User Experience Design</li>
                <li className="label label-green">Motion Design</li>
              </ul>
              <a href="#" className="button">
                I need this
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
