import React from "react"
import { Link } from "gatsby"
import Content from "./content"

const NavHeader = () => {
    const state = { clicked: false }

    const handleClick = () => {
    this.setState({ clicked: !state.clicked })
  }

  return (
    <nav className="nav bd-container">
      <span href="#" className="nav__logo"></span>
      
      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list">
          {Content.map((item, index) => (
            <li key={index} className="nav__item">
              <Link to={item.url} className="nav__link">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav__toggle" id="nav-toggle">
      <div className="box__icon">
        <box-icon name="menu-alt-right" type="regular" color="#010101" size="1.2rem"></box-icon>
        </div>
      </div>
    </nav>
  )
}

export default NavHeader
