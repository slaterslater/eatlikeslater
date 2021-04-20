import React from "react"
import { graphql } from "gatsby";
import {GatsbyImage as Img} from 'gatsby-plugin-image'
import Footer from '../components/Footer'
import styled from "styled-components";

const RecipeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  grid-auto-rows: auto auto;
`;

const IndexPage = ({data}) => {
  const recipes = data.recipes.nodes
  return (
    <>
      {/* <h1>EATLIKESLATER</h1> */}
      <RecipeGrid>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          {/* <h2>{recipe.name}</h2> */}
          <Img image={recipe.image.asset.gatsbyImageData} alt={recipe.name}/>
          <p>
            {recipe.ingredients.map(ingredient => ingredient?.name).join(', ') }
          </p>
        </div>
      ))}
      </RecipeGrid>
      <Footer />
    </>
  )
}

export const query = graphql`
  query {
  recipes: allSanityRecipe(sort: {fields: eaten, order: DESC})  {
    nodes {
      id
      name
      ingredients {
        id
        name
        vegetarian
      }
      image {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
    }
  }
}
`;

export default IndexPage
