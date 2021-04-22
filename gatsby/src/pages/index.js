import React, { useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage as Img } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Footer from "../components/Footer"

const RecipeGrid = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(280px, 350px)); */
  grid-template-columns: repeat(3, 280px);
  gap: 1rem;
  grid-auto-rows: auto auto;
`

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
      <RecipeGrid>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <Img image={recipe.image.asset.gatsbyImageData} alt={recipe.name} />
          </div>
        ))}
      </RecipeGrid>
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
