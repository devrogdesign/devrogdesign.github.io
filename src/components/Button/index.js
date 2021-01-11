import React from "react"
import PropTypes from "prop-types"
const VARIANTS = [
  "button-cta",
  "button-regular--solid",
  "button-regular--outline",
]
const ICONS = ["right-arrow-alt"]
const SPACE = ["home-button-cta"]
const Button = ({ children, variant, icon, space }) => {
    const checkVariant = VARIANTS.includes(variant) ? variant : "";
    const checkIcon = ICONS.includes(icon) ? icon : false;
    const checkSpace = SPACE.includes(space) ? space : SPACE[0];
  return (
<a download="" href="#" className={`button ${checkVariant} ${checkSpace}`}>
    <span>{children}</span>
    {checkIcon
        ? <box-icon
        className="button-link__icon"
        name="right-arrow-alt"
        type="regular"
        size="1.2rem"
        animation="fade-right"
        color="#FFFFFF"
      ></box-icon>
        : ""
      } 
    
  </a>
  )
}

export default Button
