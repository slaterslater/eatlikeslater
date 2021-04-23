import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Header from "../components/Header"
import RecipeGrid from "../components/RecipeGrid"
import Footer from "../components/Footer"

const IndexPage = ({ data }) => {
  const [recipes, setRecipes] = useState(data.recipes.nodes)

  const handleChange = e => {
    const findMatches = ({ name, tags, about }) => {
      const categories = tags.map(tag => tag.name)
      return [name, ...categories, about].find(text =>
        text?.toUpperCase().includes(e.target.value.toUpperCase())
      )
    }
    const found = data.recipes.nodes.filter(findMatches)
    setRecipes(found)
  }

  return (
    <Layout>
      <Header handleChange={handleChange} />
      <RecipeGrid recipes={recipes} />
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query {
    recipes: allSanityRecipe(sort: { order: DESC, fields: date }) {
      nodes {
        id
        name
        about
        inspiration
        tags {
          id
          name
        }
        image {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
        slug {
          current
        }
      }
    }
  }
`

export default IndexPage
