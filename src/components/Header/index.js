import React, { useEffect, useRef, useState } from "react"
import NavHeader from "../NavHeader"

const Header = () => {
  const windowGlobal = typeof window !== 'undefined' && window;
  const [scroll, setScroll] = useState(windowGlobal.scrollY)
  const heroRef = useRef()

  useEffect(() => {
    windowGlobal.addEventListener("scroll", toggle)
    windowGlobal.addEventListener("load", toggle)
    windowGlobal.addEventListener("resize", toggle)
    return () => {
      windowGlobal.removeEventListener("scroll", toggle)
      windowGlobal.removeEventListener("load", toggle)
      windowGlobal.removeEventListener("resize", toggle)
    }
  }, [windowGlobal.scrollY])

  const toggle = () => {
    heroRef.current.classList.toggle("header--hidden", scroll < windowGlobal.scrollY)
    setScroll(windowGlobal.scrollY)
  }

  return (
    <header ref={heroRef} className="l-header" id="header">
      <NavHeader></NavHeader>
    </header>
  )
}

export default Header
