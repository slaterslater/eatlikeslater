import styled from "styled-components"

export const HeaderStyles = styled.header`
  background-color: white;
  border-bottom: 1px solid var(--grey);
  width: 100%;
  padding: 8px;
  div {
    min-width: 350px;
    max-width: 1000px;
    margin: 0 auto;
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
  h1 {
    margin: 0;
    margin-right: auto;
    margin-left: 5px;
  }
  input {
    width: 175px;
    font-size: 1.2rem;
    transition: 1s;
  }
  .slide {
    /* width: 265px; */
    /* width: 0;  */
    /* padding:0; */
    /* display:none; */
    /* border:none; */
    /* transform: scaleX(0); */
    /* transform: translateX(-1000%); */
    /* transform-origin: right; */
    /* display:block; */
    /* transition: 1s; */
    /* transform: translateX(-1000%) */
  }
  .hidden {
    transform: translateY(500%);
    transition: 1s;
  }
  .pressed {
    background-color: var(--black);
  }
  /* svg {
    height: 25px;
    width: 25px;
    color: black;
    margin-left:10px;
    margin-right:5px;
  } */
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
