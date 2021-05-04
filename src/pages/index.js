import React from "react"
import "boxicons" 
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import AsWork from "../components/AsWork"
import Works from "../components/Works"
import CtaBanner from "../components/CtaBanner"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <AsWork></AsWork>
      <Works></Works>
      <CtaBanner></CtaBanner>
    </Layout>
  )
}

export default IndexPage
