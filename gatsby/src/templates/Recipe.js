// import React from "react"
// import { graphql, Link } from "gatsby"
// import { GatsbyImage as Img } from "gatsby-plugin-image"
// import ReactMarkdown from 'react-markdown'
// import styled from "styled-components"
// import Layout from "../components/Layout"

// const RecipeStyles = styled.div`
//   display: grid;
//   min-width: 350px;
//   max-width: 1000px;
//   margin-top:15px;
//   border: 1px solid var(--grey);
//   grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
//   grid-auto-rows: auto auto;  
// `

// const AboutBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-content: flex-start;
//   background-color: white;
//   padding: 5px;
//   h2 {
//     text-align: center
//   }
//   nav {
//     margin-top:auto;
//     display: flex;
//     align-content: stretch;
//   }
// `;

// const SingleRecipe = ({ data: { recipe } }) => {
//   return (
//     <Layout>
//       <RecipeStyles>
//         <Img image={recipe.image.asset.gatsbyImageData} alt={recipe.name} />
//         <AboutBox>
//           <h2>{recipe.name}</h2>
//           <ReactMarkdown children={recipe.about} />
//           <nav>
//             <Link to="/">Back Home</Link>
//             {recipe.inspiration && <Link to={recipe.inspiration} className="end">Full Recipe</Link>}
//           </nav>
//         </AboutBox>
//       </RecipeStyles>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query($slug: String!) {
//     recipe: sanityRecipe(slug: { current: { eq: $slug } }) {
//       name
//       about
//       inspiration
//       image {
//         asset {
//           gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
//         }
//       }
//     }
//   }
// `

// export default SingleRecipe
