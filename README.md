# Campaign Library Website

Campaign Library is a new library resource for activists and campaign organisers on campaign theory and practice in the UK, made by [Campaign Lab](https://campaignlab.london).

The Campaign Library uses [Airtable](https://airtable.com/) as a database of resources, and [Gatsby.js](https://www.gatsbyjs.org/) as its frontend web framework.

## Adding resources to the Campaign Library

Use the [Campaign Lab Submission Form](https://airtable.com/shrhW7BMRPPjGNZAx) to add resources to the Campaign Library.

See the [Campaign Lab Guide](https://github.com/CampaignLab/Campaign-Lab-Guide/blob/master/Campaign%20Lab%20Guide.md) for more information on getting involved in Campaign Lab projects.

## Development

### Running locally

1. You'll need the API key and Base Id for the Airtable in a file called `.env.development`:
   * See [Airtable API docs](https://airtable.com/api)
   * See [Gatbsy Environment Variables](https://www.gatsbyjs.org/docs/environment-variables/)
2. `gatsby develop` to run locally

### Making a Pull Request

1. Click 'fork' at the top of this repository
2. Clone down your fork using `git clone https://github.com/YOUR-USERNAME/campaign-library`
3. Create a new branch for your changes
4. Make your changes
5. Push your new branch and changes up to your fork of the repository
6. Go to your branch in your repository on GitHub, and click the green 'New pull request' button on the left

## Useful reading about Gatsby & Airtable

- [Gatsby documentation](https://www.gatsbyjs.org/docs/)
- [In-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/)
- [Gatsby Airtable integration plugin documentation](https://www.gatsbyjs.org/packages/gatsby-source-airtable/)
- [Blog on using Gatsby and Airtable](https://medium.com/@canvis/building-a-documentation-site-from-scratch-using-airtable-gatsby-js-and-markdown-6f39df9277fd)

## What files are in this project?

A quick look at the top-level files and directories you'll see in this Gatsby project.

    .
    ├── node_modules
    ├── src
        ├── components
        ├── pages
        └── templates
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that our project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory contains all of the code related to what's visible on the front-end of our site (what you see in the browser) such as our site header or a page template. `src` is a convention for “source code”.
    * **Components** - reusable components, such as headers, styles, layout
    * **Pages**  - manually created pages for the site
    * **Templates** - templates for auto-generation of pages

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where we specify information about our site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of our npm dependencies that were installed for our project. **(We won’t change this file directly).**

9.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for our project.

10. **`README.md`**: This markdown file containing useful reference information about our project.
