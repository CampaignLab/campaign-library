import React from "react"

import Layout from "../components/layout"
import Link from 'gatsby-link'
import Header from "../components/header"

const About = () => (
  <Layout>
    <div>
    <Header title="About" subtitle="What is the Campaign Library?"/>
        <main>
          <article>
            <p>Campaign Library is a new library resource for activists and campaign organisers on campaign 
            theory and practice in the UK, made by <a href="https://campaignlab.london">Campaign Lab</a>.</p>
            <p>If you'd like to help out with the Campain Library, read our <Link to={'/get-involved'}>guide to getting involved</Link>.</p>
          </article>
        </main>
    </div>
  </Layout>
)

export default About
