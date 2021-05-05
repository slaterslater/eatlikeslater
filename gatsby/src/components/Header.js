import React, {useState} from "react"
import { BsSearch} from 'react-icons/bs' 
import { AiOutlineStop as Stop} from 'react-icons/ai' 
import { HeaderStyles, HamburgerStyles} from '../styles/HeaderStyles'





// function toggletest(){
//   const search = document.querySelector('#search')
//   search.classList.toggle('hidden')
// }

function toggleHamburger(e){
  document.querySelector('.hamburger').classList.toggle('is-active')
}

const Header = ({ handleChange }) => {
  const [searching, setSearching] = useState(false)

  // const toggleSearchBar2 = () => {
  //   const search = document.querySelector('#search')
  //   search.classList.toggle('slide')
  //   setSearching(!searching)
  // }

  return (
    <>
    <HamburgerStyles />
    <HeaderStyles>
      {/* <h1>EATLIKESLATER</h1> */}
      {/* <input type="text" className="hidden" id="search" onChange={handleChange} /> */}
      <div>
      {/* <input type="text" className='hidden slide' id="search" onChange={handleChange} />
      {searching ? <Stop onClick={toggleSearchBar2} /> : <BsSearch onClick={toggleSearchBar2} />}
      <button type="button" onClick={toggletest}>toggle</button> */}
      <button class="hamburger hamburger--squeeze" type="button" onClick={toggleHamburger}>
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      </div>
    </HeaderStyles>
    </>
  )
}

export default Header
// style={{display: 'block'}}
