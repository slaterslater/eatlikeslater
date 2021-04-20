import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.footer`
  display:flex;
  justify-content:center;
  margin-top:15px;
  font-size:0.9rem;
`;

const Footer = () => (
  <FooterStyles>&copy; slaterslater {new Date().getFullYear()}</FooterStyles>
)

export default Footer