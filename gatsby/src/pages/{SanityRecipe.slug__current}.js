// Recipe page uses File System Route Api
import React from "react"
import ReactMarkdown from "react-markdown"
import { IoReaderOutline as Reader } from "react-icons/io5"
import { RiArrowGoBackFill as BackArrow } from "react-icons/ri"
import { graphql, Link } from "gatsby"
import { GatsbyImage as Img } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/Layout"

const RecipeStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 350px;
  max-width: 1000px;
  border: 1px solid var(--grey);
`

const ImgBox = styled.div`
  min-width: 350px;
  flex: 1;
  line-height: 0px;
`;

const AboutBox = styled.div`
  min-width: 350px;
  flex: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  background-color: white;
  padding: 5px;
  h2 {
    text-align: center;
    border-bottom: 1px solid var(--grey);
    padding-bottom: 25px;
  }
  p {
    padding: 0 15px;
  }
  nav {
    margin-top: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top: 1px solid var(--grey);
  }
  svg {
    height: 25px;
    width: 25px;
    padding: 20px;
    color: black;
  }
`

const SingleRecipe = ({ data: { recipe } }) => {
  return (
    <Layout>
      <RecipeStyles>
        <ImgBox>
          <Img 
            image={recipe.image.asset.gatsbyImageData} 
            alt={recipe.name}
          />
        </ImgBox>  
        <AboutBox>
          <h2>{recipe.name}</h2>
          <ReactMarkdown children={recipe.about} />
          <nav>
            <Link 
              to={'/#recipe'+recipe.id} 
              title="back to all recipes"
            >
              <BackArrow />
            </Link>
            {recipe.inspiration && (
              <a
                href={recipe.inspiration}
                target="_blank"
                rel="noreferrer"
                title="see inspiration for this recipe"
              >
                <Reader />
              </a>
            )}
          </nav>
        </AboutBox>
      </RecipeStyles>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    recipe: sanityRecipe(id: { eq: $id }) {
      id
      name
      about
      inspiration
      image {
        asset {
          gatsbyImageData(placeholder: BLURRED width: 700 fit: FILLMAX)
        }
      }
    }
  }
`

export default SingleRecipe
