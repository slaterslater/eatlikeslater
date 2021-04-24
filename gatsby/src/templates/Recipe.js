import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage as Img } from "gatsby-plugin-image"
import ReactMarkdown from 'react-markdown'
import styled from "styled-components"
import Layout from "../components/Layout"

const RecipeStyles = styled.div`
  display: grid;
  min-width: 350px;
  max-width: 1000px;
  margin-top:15px;
  border: 1px solid #dadada;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-auto-rows: auto auto;
  * {
    background-color: white;
  }
  div {
    padding: 5px;
  }
  h2 {
    text-align: center
  }
`

const SingleRecipe = ({ data: { recipe } }) => {
  return (
    <Layout>
      <RecipeStyles>
        <Img image={recipe.image.asset.gatsbyImageData} alt={recipe.name} />
        <div>
          <h2>{recipe.name}</h2>
          <ReactMarkdown children={recipe.about} />
        </div>
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
