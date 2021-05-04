import React from "react"
import CtaBanner from "../../components/CtaBanner"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import BackgroundStory from "../../components/SubPages/Story/BackgroundStory"
import Knowledge from "../../components/SubPages/Story/Knowledge"
import Summary from "../../components/SubPages/Story/Summary"
import Tools from "../../components/SubPages/Story/Tools"

const Story = () => {
    return <Layout>
        <SEO title="My story" />
        <Summary></Summary>
        <BackgroundStory></BackgroundStory>
        <Knowledge></Knowledge>
        <Tools></Tools>
        <CtaBanner></CtaBanner>
    </Layout>
}

export default Story