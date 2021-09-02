import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import "@fontsource/new-tegomin"
import Footer from "./Footer"

const GlobalStyle = createGlobalStyle`
    :root {
    --grey: #dadada;
    --bg: #f8f8f8;
    --white: #ffffff;
    --black: #000000;
  }
  html, body, #___gatsby, #gatsby-focus-wrapper {
    margin: 0;
    background-color: var(--bg);
    font-family: 'New Tegomin', serif;
    min-height:100%;
    height:100%;
  }
  h2 {
    font-family: "Montserrat", sans-serif;
  }
  h3 {
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
  }
`

const PageStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  min-height: 100%;
  height: 100%;
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <PageStyles>
        {children}
        <Footer />
      </PageStyles>
    </>
  )
}

export default Layout
