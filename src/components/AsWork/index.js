import React from "react"
import ButtonLink from "../ButtonLink"

const AsWork = () => (
  <section className="as-work section bd-container" id="as-work">
    <span className="section-subtitle">As work</span>
    <h2 className="section-title">The steps of my creative process</h2>
    <p className="section-description">
      This is my way of working, I use it to achieve the objectives as agreed
      and avoid misunderstandings and delays.
    </p>

    <div className="as-work__container wrapper bd-grid">
      <div className="card">
        <div className="card__header">
          <div className="card__icon">
            <div className="box__icon">
              <box-icon
                name="line-chart"
                type="regular"
                color="#010101"
                size="1.2rem"
              ></box-icon>
            </div>
          </div>
          <h3 className="card__title">
            <span style={{ fontWeight: "800" }}>1.</span> Strategy
          </h3>
          <div className="card__description">
            We shape brands through a process of exploration and investigation.
          </div>
        </div>

        <div className="card__content"></div>
      </div>
      <div className="card">
        <div className="card__header">
          <div className="card__icon">
            <div className="box__icon">
            <box-icon
                name="paint"
                type="regular"
                color="#010101"
                size="1.2rem"
              ></box-icon>
            </div>
          </div>
          <h3 className="card__title">
            <span style={{ fontWeight: "800" }}>2.</span> Design
          </h3>
          <div className="card__description">
            The design phase is where we build out the usage guidelines, user
            experience,
          </div>
        </div>

        <div className="card__content"></div>
      </div>
      <div className="card">
        <div className="card__header">
          <div className="card__icon">
            <div className="box__icon">
            <box-icon
                name="code"
                type="regular"
                color="#010101"
                size="1.2rem"
              ></box-icon>
            </div>
          </div>
          <h3 className="card__title">
            <span style={{ fontWeight: "800" }}>3.</span> Development
          </h3>
          <div className="card__description">
            Implementing your project with scalable architecture design, modern
            technology,
          </div>
        </div>

        <div className="card__content"></div>
      </div>
      <div className="card">
        <div className="card__header">
          <div className="card__icon">
            <div className="box__icon">
            <box-icon
                name="wrench"
                type="regular"
                color="#010101"
                size="1.2rem"
              ></box-icon>
            </div>
          </div>
          <h3 className="card__title">
            <span style={{ fontWeight: "800" }}>4.</span> Improve
          </h3>
          <div className="card__description">
            Complete overview of my design process through regular meetings.
          </div>
        </div>

        <div className="card__content"></div>
      </div>
      <div className="card">
        <div className="card__header">
          <div className="card__icon">
            <div className="box__icon">
            <box-icon
                name="rocket"
                type="regular"
                color="#010101"
                size="1.2rem"
              ></box-icon>
            </div>
          </div>
          <h3 className="card__title">
            <span style={{ fontWeight: "800" }}>5.</span> Delivery
          </h3>
          <div className="card__description">
            Finally, we package it all up and deliver the product to you. On
            time and on budget.
          </div>
        </div>

        <div className="card__content"></div>
      </div>
    </div>
    <div className="section-support-content">
      <ButtonLink href='#'>More detail of my process</ButtonLink>
    </div>
  </section>
)

export default AsWork
