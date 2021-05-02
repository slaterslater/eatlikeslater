import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import "@fontsource/new-tegomin"
import Footer from "./Footer"

const GlobalStyle = createGlobalStyle`
    :root {
    --grey: #dadada;
  }
  body {
    margin: 0;
    background-color: #f5f5f5;
    display:flex;
    /* flex-direction:column;   */
    justify-content: center;
    align-items: center;
    /* align-content:center; */
    min-height:100%;
  }
  html {
    font-family: 'New Tegomin', serif;
    height:100%;
  }
  h2 {
    font-family: 'Montserrat', sans-serif;
  }
`

const PageStyles = styled.div`
  /* display: grid;
  justify-content: center; */
  
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <PageStyles>{children}</PageStyles>
      <Footer />
    </>
  )
}

export default Layout
