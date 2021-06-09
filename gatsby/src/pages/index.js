import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Header from "../components/Header"
import RecipeGrid from "../components/RecipeGrid"
import SEO from "../components/SEO"

const HomePage = ({ data }) => {
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

  // when returning from a single recipe page
  // goto previous location and remove hash from url
  useEffect(() => {
    if (window.location.hash) {
      window.scrollTo(0, window.scrollY - 8)
      window.history.pushState("", "eatlikeslater", window.location.pathname)
    }
  }, [])

  return (
    <>
      <SEO />
      <Layout>
        <Header handleChange={handleChange} />
        <RecipeGrid recipes={recipes} />
      </Layout>
    </>
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
            gatsbyImageData(width: 350, placeholder: BLURRED)
          }
        }
        slug {
          current
        }
      }
    }
  }
`

export default HomePage
