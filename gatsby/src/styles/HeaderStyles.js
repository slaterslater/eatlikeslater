import styled from "styled-components"

export const HeaderStyles = styled.header`
  background-color: white;
  border-bottom: 1px solid var(--grey);
  width: 100%;
  padding: 8px 0;
  div {
    min-width: 350px;
    max-width: 1000px;
    margin: 0 auto;
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
  h1 {
    margin: -5px auto 0 5px;
  }
  input {
    width: 175px;
    font-size: 1.2rem;
    transition: 1s;
    padding: 5px;
    margin-left: 50px;
    &:focus {
      outline: none;
    }
  }
  .slide {
    width: 0;
    padding: 0;
    border: 1px solid white;
    transition: 1s;
  }
  .hidden {
    transform: translateY(500%);
    transition: 1s;
  }
  .pressed {
    background-color: var(--black);
  }
  span svg {
    height: 25px;
    width: 25px;
    color: black;
    margin-left: 10px;
    margin-right: 5px;
    margin-top: 10px;
  }
  .circle {
    position: fixed;
    top: 0;
    height: 40px;
    width: 40px;
    background-color: var(--bg);
    border-radius: 50%;
    border: 2px solid black;
    display: inline-block;
  }
`

export const UpButtonStyles = styled.nav`
  position: fixed;
  z-index: 1;
  margin-right: 10px;
  bottom: 10px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: var(--white);
  opacity: 50%;
  transition: 1s;
  svg {
    height: 40px;
    width: 40px;
    color: black;
  }
  &:hover {
    opacity: 100%;
    transform: scale(1.1);
  }
`
