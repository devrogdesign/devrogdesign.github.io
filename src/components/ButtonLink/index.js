import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const ButtonLink = ({ children, href }) => (
  <Link to={href}
    className="button-link button-link-animation"
  >
    <span>{children}</span>
      <box-icon className="button-link__icon"
      name="right-arrow-alt"
      type="regular"
      size="1.8rem"
      color="#F31658"
      ></box-icon>
      
  </Link>
)

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
}

ButtonLink.defaultProps = {
  href: null,
}

export default ButtonLink
