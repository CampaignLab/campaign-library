import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"

const GetInvolved = () => (
  <Layout>
    <div>
    <Header title="Get Involved" subtitle="Help grow the Campaign Library"/>
        <main>
          <article>
            <p>There are two main ways to help grow the Campaign Library: contributing research, or contributing code.</p>
            <h3>Contributing research summaries</h3>
            <p>If you'd like to add to the library, there are two ways to do this:</p>
            <ol>
              <li>To add a resource, use the <a href="https://airtable.com/shrhW7BMRPPjGNZAx">Campaign Library form</a>.</li>
              <li>If you'd like to be a regular contributor, join us in the <a href="https://www.campaignlab.london/join">Campaign Lab community</a>.</li>
            </ol>
            <h3>Contributing code</h3>
            <p>Help us make this website better! All the code is open sourced in our <a href="https://github.com/CampaignLab/campaign-library">GitHub repository</a>, and we welcome pull requests.</p>
            <p>If you're new to GitHub, or would like to discuss ideas further, join us in the <a href="https://www.campaignlab.london/join">Campaign Lab community</a>, and ask in our Slack channel - people will be happy to help!</p>
          </article>
        </main>
    </div>
  </Layout>
)

export default GetInvolved
