import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"

const About = () => (
  <Layout>
    <div>
    <Header title="About" subtitle="The what, why, who and when."/>
        <main>
          <article>
            <p>Campaign Library is a new library resource for activists and campaign organisers on campaign 
            theory and practice in the UK, made by <a href="https://campaignlab.london">Campaign Lab</a>.</p>
          </article>
        </main>
    </div>
  </Layout>
)

export default About
