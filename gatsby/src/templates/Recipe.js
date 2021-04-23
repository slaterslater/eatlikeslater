import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage as Img } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/Layout"

const RecipeStyles = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(280px, 350px)); */
  grid-template-columns: 200px 100px;
  gap: 1rem;
  grid-auto-rows: auto auto;
`

const SingleRecipe = ({ data: { recipe } }) => {
  return (
    <Layout>
      <RecipeStyles>
        <Img image={recipe.image.asset.gatsbyImageData} alt={recipe.name} />
        <p>{recipe.name}</p>
      </RecipeStyles>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    recipe: sanityRecipe(slug: { current: { eq: $slug } }) {
      name
      about
      inspiration
      image {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
    }
  }
`

export default SingleRecipe
