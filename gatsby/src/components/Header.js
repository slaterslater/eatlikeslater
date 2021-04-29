import React from "react"
import styled from "styled-components"

const HeaderStyles = styled.header`
  margin-top: 8px;
  text-align: right;
  margin-bottom: 5px;
  input {
    width: 265px;
    font-size: 1.2rem;
    padding: 5px;
  }
`

const Header = ({ handleChange }) => {
  return (
    <HeaderStyles>
      {/* <h1>EATLIKESLATER</h1> */}
      <input type="text" onChange={handleChange} />
    </HeaderStyles>
  )
}

export default Header
