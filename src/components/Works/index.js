import React from "react"
import Work1 from "../../../static/assets/img/work1.png"
import Work2 from "../../../static/assets/img/work2.png"
import Work3 from "../../../static/assets/img/work3.png"
import Work4 from "../../../static/assets/img/work4.png"
import ButtonLink from "../ButtonLink"

const Works = () => (
  <section className="works section" id="works">
    <div className="bd-container">
      <span className="section-subtitle">My selected works</span>
      <h2 className="section-title">A little bit of the work I've done</h2>

      <div className="works__container wrapper bd-grid">
        <div className="project__item">
          <figure className="project__wrapper-img">
            <a href="#">
              <img src={Work1} alt="" className="project__img"></img>
            </a>
          </figure>

          <div className="project__data">
            <a href="#">
              <h2 className="project__title">Digital X Creative Agency</h2>
            </a>
            <span className="project__subtitle">
              We designed and coded the website of a renowned digital marketing
              agency.
            </span>
          </div>
        </div>

        <div className="project__item">
          <figure className="project__wrapper-img">
            <a href="#">
              <img src={Work2} alt="" className="project__img"></img>
            </a>
          </figure>

          <div className="project__data">
            <a href="#">
              <h2 className="project__title">Bank of America</h2>
            </a>
            <span className="project__subtitle">
              A redesign concept of the Bank of America's mobile app.
            </span>
          </div>
        </div>

        <div className="project__item">
          <figure className="project__wrapper-img">
            <a href="#">
              <img src={Work3} alt="" className="project__img"></img>
            </a>
          </figure>

          <div className="project__data">
            <a href="#">
              <h2 className="project__title">Facta Saas</h2>
            </a>
            <span className="project__subtitle">
              An employee engagement and training web app.
            </span>
          </div>
        </div>

        <div className="project__item">
          <figure className="project__wrapper-img">
            <a href="#">
              <img src={Work4} alt="" className="project__img"></img>
            </a>
          </figure>

          <div className="project__data">
            <a href="#">
              <h2 className="project__title">Seft-care</h2>
            </a>
            <span className="project__subtitle">
              A self-care app that offers a personalized selection of guides and
              mentors.
            </span>
          </div>
        </div>
      </div>
      <div className="section-support-content">
        <ButtonLink href="#">More works on Dribbble</ButtonLink>
      </div>
    </div>
  </section>
)

export default Works
