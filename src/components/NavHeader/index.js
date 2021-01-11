import React from 'react';
import { Link } from 'gatsby';

const NavHeader = () => (
<nav className="nav bd-container">
<span href="#" className="nav__logo"></span>

<div className="nav__menu" id="nav-menu">
    <ul className="nav__list">
        <li className="nav__item"><Link to="#home" className="nav__link active-link">Home</Link></li>
        <li className="nav__item"><Link to="#my-story" className="nav__link">My story</Link></li>
        <li className="nav__item"><Link to="#my-works" className="nav__link">My works</Link></li>
        <li className="nav__item"><Link to="#as-work" className="nav__link">As work</Link></li>
        <li className="nav__item"><Link to="#resume" className="nav__link">Resume</Link></li>
        <li className="nav__item"><Link to="#contact" className="nav__link">Contact</Link></li>
    </ul>
</div>

<div className="nav__toggle" id="nav-toggle">
    <i className='bx bx-menu'></i>
</div>
</nav>
)

export default NavHeader