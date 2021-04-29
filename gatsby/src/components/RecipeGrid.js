import React from "react"
import { Link } from "gatsby"
import { GatsbyImage as Img } from "gatsby-plugin-image"
import styled from "styled-components"

const RecipeGridStyles = styled.div`
  display: grid;
  min-width: 350px;
  max-width: 1000px;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  grid-auto-rows: auto auto;
`

const RecipeGrid = ({ recipes }) => {
  return (
    <RecipeGridStyles>
      {recipes.map(recipe => (
        <Link to={`/${recipe.slug.current}`} key={recipe.id} id={'recipe' + recipe.id}>
          <Img image={recipe.image.asset.gatsbyImageData} alt={recipe.name} />
        </Link>
      ))}
    </RecipeGridStyles>
  )
}

export default RecipeGrid
