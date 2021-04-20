import React from "react"
import { graphql } from "gatsby";
import {GatsbyImage as Img} from 'gatsby-plugin-image'
import Footer from '../components/Footer'

const IndexPage = ({data}) => {
  console.log(data)
  const recipes = data.recipes.nodes
  return (
    <>
      <h1>EATLIKESLATER</h1>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <Img image={recipe.image.asset.gatsbyImageData} alt={recipe.name}/>
          <ul>
            {recipe.ingredients.map(ingredient => (
              <li key={ingredient.id}>{ingredient.name}</li>
            ))}
          </ul>
        </div>
      ))}
      <Footer />
    </>
  )
}

export const query = graphql`
  query {
  recipes: allSanityRecipe {
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
