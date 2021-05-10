import React, { useState } from "react"
import { BsSearch as IconSearch } from "react-icons/bs"
import { AiOutlineStop as IconStop } from "react-icons/ai"
import { useInView } from "react-intersection-observer"
import { BiUpArrowCircle } from "react-icons/bi"
import { HeaderStyles, UpButtonStyles } from "../styles/HeaderStyles"

const Header = ({ handleChange }) => {
  const [searching, setSearching] = useState(false)
  const { ref, inView } = useInView() // inView == true if ref in viewport

  const scrollToTop = () => {
    document.querySelector("header").scrollIntoView({
      behavior: "smooth",
    })
  }

  const toggleGrey = () => {
    document.querySelector("nav").classList.toggle("pressed")
  }

  const toggleSearchBar = () => {
    const search = document.querySelector("input")
    search.classList.toggle("slide")
    if (!searching) search.focus()
    setSearching(!searching)
  }

  return (
    <>
      <HeaderStyles>
        <div ref={ref}>
          <UpButtonStyles className={inView ? "hidden" : ""}>
            <BiUpArrowCircle
              title="Return to Top"
              onClick={scrollToTop}
              onMouseDown={toggleGrey}
              onMouseUp={toggleGrey}
            />
          </UpButtonStyles>
          <h1>
            EAT<span style={{ color: "chocolate" }}>LIKE</span>SLATER
          </h1>
          <input className="slide" type="text" onChange={handleChange} />
          <span onClick={toggleSearchBar}>
            {searching ? <IconStop /> : <IconSearch />}
          </span>
        </div>
      </HeaderStyles>
    </>
  )
}

export default Header
