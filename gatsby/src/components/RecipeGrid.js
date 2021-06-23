import React from "react"
import { Link } from "gatsby"
import { GatsbyImage as Img } from "gatsby-plugin-image"
import styled from "styled-components"

const RecipeGridStyles = styled.div`
  margin-bottom: auto;
  display: grid;
  min-width: 350px;
  max-width: 1000px;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  grid-auto-rows: auto auto;
  a{
    position:relative;
  }
  span{
    position: absolute;
    width:100%;
    color: white;
    top: -9999em;
    z-index: 2;
    text-align: center;
    pointer-events:none;
    /* need above to have clicks pass through span to underlying anchor */
  }
  span.active {
    top: 15px; 
  }
`

const Whoops = styled.p`
  margin: auto;
`

const handleClick = e => {
  const chosen = e.target.parentElement.previousElementSibling
  if (chosen.classList.contains('active')) return
  e.preventDefault()
  const stale = document.querySelector('.active')
  if (stale) {
    stale.classList.remove('active')
    stale.nextElementSibling.children[2].style.opacity = '1'
  }
  chosen.classList.add('active')
  chosen.nextElementSibling.firstChild.style.backgroundColor = 'black'
  chosen.nextElementSibling.children[2].style.opacity = '0.5'
  // console.log(chosen.nextElementSibling.firstChild)
}

const RecipeGrid = ({ recipes }) => {
  if (recipes.length === 0)
    return <Whoops>That doesn't match anything...</Whoops>
  return (
    <RecipeGridStyles>
      {recipes.map(recipe => (
        <Link
          onClick={handleClick}
          to={`/${recipe.slug.current}`}
          key={recipe.id}
          id={"recipe" + recipe.id}
        >
          <span>{recipe.name}</span>
          <Img image={recipe.image.asset.gatsbyImageData} alt={recipe.name} />
        </Link>
      ))}
    </RecipeGridStyles>
  )
}

export default RecipeGrid
