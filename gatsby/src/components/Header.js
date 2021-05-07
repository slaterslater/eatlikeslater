import React, { useState } from "react"
import { BsSearch } from "react-icons/bs"
import { AiOutlineStop as Stop } from "react-icons/ai"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import { BiUpArrowCircle } from "react-icons/bi"
import { HeaderStyles } from "../styles/HeaderStyles"

// 2DO
/*
add search input
add sliding functionality
focus on input when sliding in
remove from dom when sliding out
refactor all styles
*/

const TopScroller = styled.nav`
  position: fixed;
  z-index: 1;
  margin-right: 10px;
  bottom: 10px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: var(--white);
  transition: 1s;
  svg {
    height: 40px;
    width: 40px;
    color: black;
  }
`

// const HeaderStyles = styled.header`
//   position:fixed;
//   top: 0;
//   z-index:2;
//   width:100%;
//   div {
//     min-width: 350px;
//     max-width: 1000px;
//     margin: 0 auto;
//     display: flex;
//   justify-content: flex-end;
//   }
//   #menu {
//     background-color:white;
//     max-width: 100%;
//     height:40px;
//     top:0;
//     border-bottom: 1px solid var(--grey);
//     transition: 0.75s;
//   }
//   .slide-out{
//     /* transition: 2.5s; */
//     transform: translateX(-200%);
//   }
//   .circle{
//   position:fixed;
//   top:0;
//   margin-right:2px;
//   height: 40px;
//   width: 40px;
//   background-color: var(--bg);
//   border-radius: 50%;
//   display: inline-block;
//   }
//   .match-menu{
//     background-color:var(--white);
//   }
// `;

const scrollToTop = () => {
  document.querySelector("header").scrollIntoView({
    behavior: "smooth",
  })
}

const toggleGrey = () => {
  document.querySelector("nav").classList.toggle("pressed")
}

const Header = ({ handleChange }) => {
  const [searching, setSearching] = useState(false)
  const { ref, inView } = useInView() // inView == true if ref in viewport
  // const toggleSearchBar2 = () => {
  //   const search = document.querySelector('#search')
  //   search.classList.toggle('slide')
  //   setSearching(!searching)
  // }

  return (
    <>
      <HeaderStyles>
        <div ref={ref}>
          <TopScroller className={inView ? "hidden" : ""}>
            <BiUpArrowCircle
              title="Return to Top"
              onClick={scrollToTop}
              onMouseDown={toggleGrey}
              onMouseUp={toggleGrey}
            />
          </TopScroller>
          <h1>
            EAT<span style={{ color: "chocolate" }}>LIKE</span>SLATER
          </h1>
        </div>
      </HeaderStyles>
    </>
  )
}

export default Header
