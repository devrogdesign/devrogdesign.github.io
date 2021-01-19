import React, { Component } from "react"
import { Link } from "gatsby"
import Content from "./content"

class NavHeader extends Component {
  constructor(props) {
    super(props)
    this.state = { clicked: false }
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })

    /*==== SCROLL HIDDEN MENU ====*/
    var scroll = window.scrollY
    var header = document.getElementById("header")

    var toggle = function () {
      header.classList.toggle("header--hidden", scroll < scrollY)
      scroll = scrollY
    }

    window.onscroll = toggle
    window.onload = toggle
    window.onrisize = toggle
  }

  render() {
    return (
      <nav className="nav bd-container">
        <span href="#" className="nav__logo"></span>

        <div
          className={this.state.clicked ? "nav__menu active" : "nav__menu"}
          id="nav-menu"
        >
          <ul className="nav__list">
            {Content.map((item, index) => (
              <li key={index} className="nav__item">
                <Link to={item.url} className="nav__link anim-destination">
                  <span data-hover={item.dataHover}>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle" onClick={this.handleClick}>
          <div className="box__icon">
            <box-icon
              name={this.state.clicked ? "x" : "menu-alt-right"}
              type="regular"
              color="#010101"
              size="1.2rem"
            ></box-icon>
          </div>
        </div>

        <div
          className={
            this.state.clicked ? "nav__overlay active" : "nav__overlay"
          }
        ></div>
      </nav>
    )
  }
}

export default NavHeader
