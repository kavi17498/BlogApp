import React from 'react'
import {Link} from 'react-router-dom'
import Image from "../images/girl.jpg"

import {AiOutlineClose} from "react-icons/ai"
function Header() {
  return (
    <nav>
      <div className='container nav__container'>
      <Link to="/" className='nav__logo'>
      <img src={Image} alt='camerawom' ></img>
      </Link>
      <ul className='nav-menu'>
        <li> <Link to="/profile">Profile</Link> </li>
        <li> <Link to="/create">Create post</Link> </li>
        <li> <Link to="/authors">Authors</Link> </li>
        <li> <Link to="/logout">Logout</Link> </li>
      </ul>
      <button className='nav__toggle-btn'>
        <AiOutlineClose />
      </button>
      </div>
          </nav>
  )
}

export default Header