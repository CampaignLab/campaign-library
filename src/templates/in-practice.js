import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/header'
export default ({ data }) =>  (
  <Layout>
    <Header title={data.airtable.data.name} subtitle={ `A ${data.airtable.data.type} from ${data.airtable.data.source}` }></Header>
    <main>
      <article>
        <ul>
          <li><a href={data.airtable.data.url} title={data.airtable.data.name}>Original {data.airtable.data.type}</a> {data.airtable.data.open_access ? 'is free to access' : ''} </li>
        </ul>
        <span dangerouslySetInnerHTML={{
            __html: data.airtable.data.summary.childMarkdownRemark.html,
          }}
        />
      </article>
    </main>
  </Layout>
)
export const query = graphql`
  query GetPractice($slug: String!) {
    airtable(table: { eq: "in-practice" }, data: { slug: { eq: $slug } }) {
      data {
        slug
        name
        source
        type
        summary {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`