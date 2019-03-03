require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Campaign Library`,
    description: `A new library resource for activists and campaign organisers on campaign theory and practice in the UK, made by Campaign Lab.`,
    author: `Campaign Lab`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'literature',
            tableView: 'published',
            mapping: { summary: 'text/markdown', method: 'text/markdown', key_takeaways: 'text/markdown', practical_recommendations: 'text/markdown' },
            tableLinks: ['in_practice'],
          },
          { 
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: 'in-practice',
            tableView: 'published',
            mapping: { summary: 'text/markdown' },
            tableLinks: ['literature'],
          }
        ]
      }
    },
  ],
}
