import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/header'
export default ({ data }) => (
  <Layout>
    <Header title={data.airtable.data.name} subtitle={ `By ${data.airtable.data.author}. Summarised by ${data.airtable.data.summary_author.name}.` }></Header>
    <main>
      <article>
        <ul>
          <li><a href={data.airtable.data.url} title={data.airtable.data.name}>Original {data.airtable.data.type}</a> {data.airtable.data.open_access ? 'is free to access' : ''} </li>
          <li>Conducted in {data.airtable.data.country}</li>
        </ul>
        <span dangerouslySetInnerHTML={{
            __html: data.airtable.data.summary.childMarkdownRemark.html,
          }}
        />
        <h3>Key Takeaways</h3>
        <span dangerouslySetInnerHTML={{
            __html: data.airtable.data.key_takeaways.childMarkdownRemark.html,
          }}
        />
        <h3>Practical Recommendations</h3> 
        <span dangerouslySetInnerHTML={{
            __html: data.airtable.data.practical_recommendations.childMarkdownRemark.html,
          }}
        />
        <h3>Method</h3>
        <span dangerouslySetInnerHTML={{
            __html: data.airtable.data.method.childMarkdownRemark.html,
          }}
        />
      </article>
    </main>
  </Layout>
)
export const query = graphql`
  query GetLiterature($slug: String!) {
    airtable(table: { eq: "literature" }, data: { slug: { eq: $slug } }) {
      data {
        slug
        name
        summary {
          childMarkdownRemark {
            html
          }
        }
        method {
          childMarkdownRemark {
            html
          }
        }
        key_takeaways {
          childMarkdownRemark {
            html
          }
        }
        practical_recommendations {
          childMarkdownRemark {
            html
          }
        }
        summary_author { name }
        url
        type
        author
        country
        open_access
      }
    }
  }
`