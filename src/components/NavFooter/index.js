import React from "react"
import { Link } from "gatsby"
import Content from "./content"
 
const NavFooter = () => (
  <div className="footer__container bd-grid">
    <div className="footer__content">
      <Link to="/#">
      <span className="nav__logo footer__logo"></span>
      </Link>
      
      <span className="footer__description">
        Diseñando nuevas experiencias que causen impacto.
      </span>
      <div className="footer__copy_container">
        <p className="footer__copy">
          &#169; 2020 Rodrigo García. All right reserved.
        </p>
        <p className="footer__copy">
          Designer & Coded with <box-icon
              name="heart"
              type="regular"
              color="#2423FA"
              size="16px"
            ></box-icon>{" by "} 
            <Link to='/#'><span className="font-medium">devrogdesign</span></Link>
        </p>
      </div>
    </div>

    <div className="footer__content">
      <h3 className="footer__title">Contacto</h3>
      <ul>
          <li>
            <a href="mailto: devrogdesign@gmail.com" className="footer__link anim-destination">
              <span data-hover="devrogdesign@gmail.com">devrogdesign@gmail.com</span>
            </a>
          </li>
          <li>
            <a href="tel:+59176803087" className="footer__link anim-destination">
              <span data-hover="+591 (768) 030 87">+591 (768) 030 87</span>
            </a>
          </li>
      </ul>
    </div>

    <div className="footer__content">
      <h3 className="footer__title">Seamos amigos</h3>
      <div className="footer__social_container">
        {Content.social.map((item, index) => (
          <a href={item.url} target="_blank" rel="noreferrer" className="footer__social">
            <box-icon
              name={item.iconName}
              type="logo"
              color="#32353E"
              animation="tada-hover"
            ></box-icon>
          </a>
        ))}
      </div>
    </div>

    <div className="footer__content">
      <h3 className="footer__title">Menu</h3>
      <ul>
        {Content.menu.map((item, index) => (
          <li key={index}>
            <Link to={item.url} className="footer__link anim-destination">
              <span data-hover={item.dataHover}>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default NavFooter
