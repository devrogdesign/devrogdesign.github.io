import React from "react"

const Knowledge = () => (
  <section className="knowledge section bd-container">
    <span className="section-subtitle">Mis conocimientos</span>
    <h2 className="section-title">Siempre estoy aprendiendo</h2>
    <p className="section-description">
      Día a día estoy constantemente aprendiendo habilidades nuevas que complementen mi trabajo, actualmente te puedo ayudar en:    </p>

    <div className="knowledge__container wrapper">
      <div className="knowledge__subcontainer bd-grid">
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
            Estrategia
            </h3>
            <div className="card__description">
            </div>
          </div>

          <div className="card__content">
              <ul className="card__list-knowledge">
              <li className="list__knowledge__item"><box-icon name='check-circle' type='solid' color='#9AD5C0' ></box-icon>Estrategia UX/UI</li>
              <li className="list__knowledge__item"><box-icon name='check-circle' type='solid' color='#9AD5C0' ></box-icon>Auditoria UX/UI</li>
              <li className="list__knowledge__item"><box-icon name='check-circle' type='solid' color='#9AD5C0' ></box-icon>Product MVP</li>
            </ul>      
          </div>
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
              Diseño
            </h3>
            <div className="card__description">
            </div>
          </div>

          <div className="card__content">
          <ul className="card__list-knowledge">
          <li className="list__knowledge__item"><box-icon name='check-circle' type='solid' color='#9AD5C0' ></box-icon>Diseño UX/UI</li>
              <li className="list__knowledge__item"><box-icon name='check-circle' type='solid' color='#9AD5C0' ></box-icon>Diseño Web</li>
              <li className="list__knowledge__item"><box-icon name='check-circle' type='solid' color='#9AD5C0' ></box-icon>Diseño Mobile App</li>
              <li className="list__knowledge__item"><box-icon name='check-circle' type='solid' color='#9AD5C0' ></box-icon>Diseño Ecommerce</li>
              <li className="list__knowledge__item"><box-icon name='check-circle' type='solid' color='#9AD5C0' ></box-icon>Sistema de Diseño</li>
              <li className="list__knowledge__item"><box-icon name='check-circle' type='solid' color='#9AD5C0' ></box-icon>Prototipado</li>
            </ul> 
          </div>
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
              Desarrollo
            </h3>
            <div className="card__description">
            </div>
          </div>

          <div className="card__content">
          <ul className="card__list-knowledge">
              <li className="list__knowledge__item"><box-icon name='check-circle' type='solid' color='#9AD5C0' ></box-icon>Desarrollo Frontend</li>
              <li className="list__knowledge__item"><box-icon name='check-circle' type='solid' color='#9AD5C0' ></box-icon>Webflow</li>
              <li className="list__knowledge__item"><box-icon name='check-circle' type='solid' color='#9AD5C0' ></box-icon>Wordpress</li>
              <li className="list__knowledge__item"><box-icon name='check-circle' type='solid' color='#9AD5C0' ></box-icon>HTML-CSS-JS</li>
              <li className="list__knowledge__item"><box-icon name='check-circle' type='solid' color='#9AD5C0' ></box-icon>React-Gatsby</li>
            </ul> 
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Knowledge
