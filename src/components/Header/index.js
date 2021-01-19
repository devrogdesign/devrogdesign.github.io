import React, { useEffect, useRef, useState } from "react"
import NavHeader from "../NavHeader"

const Header = () => {
  const [scroll, setScroll] = useState(window.scrollY)
  const heroRef = useRef()

  useEffect(() => {
    window.addEventListener("scroll", toggle)
    window.addEventListener("load", toggle)
    window.addEventListener("resize", toggle)
    return () => {
      window.removeEventListener("scroll", toggle)
      window.removeEventListener("load", toggle)
      window.removeEventListener("resize", toggle)
    }
  }, [window.scrollY])

  const toggle = () => {
    heroRef.current.classList.toggle("header--hidden", scroll < window.scrollY)
    setScroll(window.scrollY)
  }

  return (
    <header ref={heroRef} className="l-header" id="header">
      <NavHeader></NavHeader>
    </header>
  )
}

export default Header
