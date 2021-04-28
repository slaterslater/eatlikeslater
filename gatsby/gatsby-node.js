// import path from "path"

// async function turnRecipesIntoPages({ graphql, actions }) {
//   const recipeTemplate = path.resolve("./src/templates/Recipe.js")
//   const { data } = await graphql(`
//     query {
//       recipes: allSanityRecipe {
//         nodes {
//           name
//           slug {
//             current
//           }
//         }
//       }
//     }
//   `)
//   data.recipes.nodes.forEach(recipe => {
//     console.log(`creating ${recipe.name} page...`)
//     actions.createPage({
//       path: `${recipe.slug.current}`,
//       component: recipeTemplate,
//       context: {
//         slug: recipe.slug.current,
//       },
//     })
//   })
// }

// export async function createPages(params) {
//   await turnRecipesIntoPages(params)
// }
