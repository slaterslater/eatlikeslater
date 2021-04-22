import React from "react"
import styled from "styled-components"

const PageStyles = styled.div`
  display: grid;
  justify-content: center;
`

const Layout = ({ children }) => {
  return <PageStyles>{children}</PageStyles>
}

export default Layout
