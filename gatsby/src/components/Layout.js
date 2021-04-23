import React from "react"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #f0f0f0;
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
    </>
  )
}

export default Layout
