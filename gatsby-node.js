const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
  // createPage is a built in action,
  // available to all gatsby-node exports
  const { createPage } = actions
  return new Promise(async resolve => {
    // we need the table name (e.g. "Sections")
    // as well as the unique path for each Page/Section.
    const result = await graphql(`
      {
        allAirtable {
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
    // For each path, create page and choose a template.
    // values in context Object are available in that page's query
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