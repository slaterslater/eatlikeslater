import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import "@fontsource/new-tegomin"
import Footer from "./Footer"

const GlobalStyle = createGlobalStyle`
    :root {
    --grey: #dadada;
  }
  html, body, #___gatsby, #gatsby-focus-wrapper {
    margin: 0;
    background-color: #f5f5f5;
    font-family: 'New Tegomin', serif;
    /* display:flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    align-content: center; */
    min-height:100%;
    height:100%;
  }
  h2 {
    /* font-family: 'Montserrat', sans-serif; */
  }
  /* html {
    font-family: 'New Tegomin', serif;
    min-height:100%;
    height:100%;
  }
  {
    min-height:100%;
    height:100%;
  } */
  #top, #mid{
    /* flex: 1; */
    background-color: pink;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
  }
  #mid{
    margin-top: auto;  
    margin-bottom:auto;
  }
  #bot {
    /* flex:1; */
    /* align-self:flex-end; */
    background-color: skyblue;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
  /* margin-top: auto;   */
  }
`

const PageStyles = styled.div`
  /* display: grid;
  justify-content: center; */
  /* align-self:flex-start */
  display: flex;
  flex-direction: column;
  /* align-content: center; */
  /* justify-content:space-between; */
  min-height: 100%;
  height:100%;
  /* flex-wrap: wrap; */
  align-items: center;
  align-content: center;
  /* align-content: center; */
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <PageStyles>
        {/* <Header /> */}
        {children}
      {/* <div id="top">Top</div>
      <div id="mid">Mid</div>
      <div id="bot">Bottom</div> */}
      <Footer />
      </PageStyles>
      {/* <PageStyles>{children}</PageStyles> */}
    </>
  )
}

export default Layout
