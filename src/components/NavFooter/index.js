import React from "react"
import { Link } from "gatsby"

const NavFooter = () => (
  <div className="footer__container bd-grid">
    <div className="footer__content">
      <span href="#" className="nav__logo footer__logo"></span>
      <span className="footer__description">
        Designing new experiences that make an impact.
      </span>
      <div className="footer__copy_container">
        <p className="footer__copy">
          &#169; 2020 Rodrigo García. All right reserved.
        </p>
        <p className="footer__copy">
          Designer & Coded with. <i className="bx bx-heart"></i>{" "}
          <span>devrogdesign</span>
        </p>
      </div>
    </div>

    <div className="footer__content">
      <h3 className="footer__title">Contact</h3>
      <ul>
        <li>
          <a href="#contact" className="footer__link">
            hello@devrog.design
          </a>
        </li>
        <li>
          <a href="#contact" className="footer__link">
            +591 (768) 030 87
          </a>
        </li>
      </ul>
    </div>

    <div className="footer__content">
      <h3 className="footer__title">Let's be friends</h3>
      <div className="footer__social_container">
        <a
          href="https://www.facebook.com"
          target="_blank"
          className="footer__social"
        >
          <box-icon name="facebook" type="logo" color="#32353E"></box-icon>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          className="footer__social"
        >
          <box-icon name="instagram" type="logo" color="#32353E"></box-icon>
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          className="footer__social"
        >
          <box-icon name="linkedin" type="logo" color="#32353E"></box-icon>
        </a>
        <a
          href="https://www.behance.net"
          target="_blank"
          className="footer__social"
        >
          <box-icon name="behance" type="logo" color="#32353E"></box-icon>
        </a>
        <a
          href="https://www.dribbble.com/"
          target="_blank"
          className="footer__social"
        >
          <box-icon name="dribbble" type="logo" color="#32353E"></box-icon>
        </a>
      </div>
    </div>

    <div className="footer__content">
      <h3 className="footer__title">Menu</h3>
      <ul>
        <li>
          <Link to="#" className="footer__link">
            Home
          </Link>
        </li>
        <li>
          <Link to="#" className="footer__link">
            My story
          </Link>
        </li>
        <li>
          <Link to="#" className="footer__link">
            My works
          </Link>
        </li>
        <li>
          <Link to="#" className="footer__link">
            As work
          </Link>
        </li>
        <li>
          <Link to="#" className="footer__link">
            Resume
          </Link>
        </li>
        <li>
          <Link to="#" className="footer__link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default NavFooter
