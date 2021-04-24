import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import Footer from "./Footer"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #f5f5f5;
  }
`

const PageStyles = styled.div`
  display: grid;
  justify-content: center;
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <PageStyles>{children}</PageStyles>
      <Footer/>
    </>
  )
}

export default Layout
