import React from "react"
import { Link } from "gatsby"
import { GatsbyImage as Img } from "gatsby-plugin-image"
import styled from "styled-components"

const RecipeGridStyles = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(280px, 350px)); */
  grid-template-columns: repeat(3, 280px);
  gap: 1rem;
  grid-auto-rows: auto auto;
`

const RecipeGrid = ({ recipes }) => {
  console.log(recipes)
  return (
    <RecipeGridStyles>
      {recipes.map(recipe => (
        <Link to={`/${recipe.slug.current}`} key={recipe.id}>
          <Img image={recipe.image.asset.gatsbyImageData} alt={recipe.name} />
        </Link>
      ))}
    </RecipeGridStyles>
  )
}

export default RecipeGrid
