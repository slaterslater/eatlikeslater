import React from "react"
import styled from "styled-components"

const HeaderStyles = styled.header`
  text-align: right;
  input {
    width: 265px;
    font-size: 1.2rem;
    padding: 5px;
  }
  margin-bottom: 5px;
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
