import React from "react"
import styled from "styled-components"

const FooterStyles = styled.footer`
  margin: 15px 0;
  font-size: 0.9rem;
  text-align: center;
  padding-bottom: 15px;
`

const Footer = () => (
  <FooterStyles>&copy; slaterslater {new Date().getFullYear()}</FooterStyles>
)

export default Footer
