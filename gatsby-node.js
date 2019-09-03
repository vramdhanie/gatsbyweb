/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const {
    data: {
      allMdx: { edges: articles },
    },
  } = await graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  articles.forEach(({ node }) => {
    const { slug } = node.frontmatter
    createPage({
      path: slug,
      component: require.resolve("./src/templates/article-template.js"),
      context: { slug: slug },
    })
  })
}
