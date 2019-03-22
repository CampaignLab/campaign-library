const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
  // createPage is a built in action,
  // available to all gatsby-node exports.
  const { createPage } = actions
  return new Promise(async resolve => {
    // Get table name and slug for all tables, 
    // except "tags-index", as we don't want to generate 
    // pages from that table.
    const result = await graphql(`
      {
        allAirtable(filter: { table: { nin: "tags" } }) {
          edges {
            node {
              table
              data {
                slug
              }
            }
          }
        }
      }
    `)
    // For each path, create the page and choose a template.
    // Values in context object are available in that page's query.
    result.data.allAirtable.edges.forEach(({ node }) => {
      const isLiterature = node.table === 'literature'
      createPage({
        path: node.data.slug,
        component: isLiterature
          ? path.resolve(`./src/templates/literature.js`)
          : path.resolve(`./src/templates/in-practice.js`),
        context: {
          slug: node.data.slug,
        },
      })
    })
    resolve()
  })
}