import React from "react"
import { graphql } from 'gatsby'


import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reuseble/HeroSection'
import Infoblock from '../components/Reuseble/Infoblock'
import DualInfoblock from '../components/Reuseble/DualInfoblock'
 

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
      img ={data.img.childImageSharp.fluid}
      title= "I Write Code"
      subtitle="Learn Code Online"
      heroClass="hero-background"
    />
    <Infoblock heading="About Us"/>
    <DualInfoblock heading="Our Team" src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" /> 
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG

      }
    }
  }
} 
`

export default IndexPage
