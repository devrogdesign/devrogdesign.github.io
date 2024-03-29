import PropTypes from "prop-types"
import React from "react"
import "../layout.css"
import Footer from "../Footer"
import Header from "../Header"

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main className="l-main">
      {children}
      </main>
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
}

export default Layout
