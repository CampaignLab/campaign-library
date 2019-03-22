import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"

const IndexPage = ({ data }) => (
  <Layout>
    <div>
    <Header title="Resources" subtitle="A new library resource for activists and campaign organisers on campaign theory and practice in the UK, made by Campaign Lab."/>
        <main>
          <ul className="resource-index">
            {data.allAirtable.edges.map((edge, i) => (
              <li>
                <Link to={edge.node.data.slug} className="resource-card">
                  {edge.node.data.name}
                  <br/>
                  {edge.node.data.topic_tags.map((topic_tag, i) => (
                    <span>{topic_tag.data.tag_name}</span>
                  ))}
                </Link>
              </li>
            ))}
          </ul>
        </main>
    </div>
  </Layout>
)

export default IndexPage

// Query airtable for the name and slug of each record,
// filtering for only records in the literature table.
export const query = graphql`
{
  allAirtable(filter: { table: { eq: "literature" } }) {
    edges {
      node {
        data {
          name
          slug
          topic_tags {
            data {
              tag_name
            }
          }
        }
      }
    }
  }
}
`