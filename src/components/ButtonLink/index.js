import React from "react"
import PropTypes from "prop-types"

const ButtonLink = ({ children, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="button-link button-link-animation"
  >
    <span>{children}</span>
    <box-icon
      className="button-link__icon"
      name="right-arrow-alt"
      type="regular"
      size="1.2rem"
      color="#F31658"
    ></box-icon>
  </a>
)

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
}

ButtonLink.defaultProps = {
  href: null,
}

export default ButtonLink
