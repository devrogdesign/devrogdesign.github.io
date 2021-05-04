import React from "react"
import { Link } from "gatsby"
const VARIANTS = [
  "button-cta",
  "button-regular--solid",
  "button-regular--outline",
]
const ICONS = ["right-arrow-alt"]
const SPACE = ["home-button-cta"]
const Button = ({ children, href, variant, icon, space }) => {
    const checkVariant = VARIANTS.includes(variant) ? variant : "";
    const checkIcon = ICONS.includes(icon) ? icon : false;
    const checkSpace = SPACE.includes(space) ? space : SPACE[0];
  return (
<Link to={href} className={`button ${checkVariant} ${checkSpace}`}>
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
    
  </Link>
  )
}

export default Button
