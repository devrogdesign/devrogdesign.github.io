import React from "react"
import { Link } from "gatsby"

const CtaBanner = () => (
<section className="cta-banner blur section section__padding-off" id="cta-banner">
    <div className="bd-container">
        <div className="cta-banner__container wrapper wrapper__center">
            <h2 className="section-title biggest-title">¿Está pensando en llevar tu idea, <br/>negocio o empresa al <span className="emphasis-text">siguiente nivel</span>?</h2>
            <p className="about__description support-copy font-bold">No quiero ser un freelancer del montón y ofrecerte una plantilla más que no colme tus expectativas, sino ofrecerte una solución enfocada a tus usuarios que veas reflejada en el crecimiento de tu negocio.</p>
            
            <div className="section-support-content">
                <Link to="https://t3bjfizqpcg.typeform.com/to/G9DIndPO" className="button button-cta"><span>Hablemos</span>
                <box-icon className="button-link__icon"
                name="right-arrow-alt"
                type="regular"
                size="1.2rem"
                animation="fade-right"
                color="#FFFFFF"
              ></box-icon>
                </Link>
            </div>
        </div>
    </div>
</section>
)

export default CtaBanner