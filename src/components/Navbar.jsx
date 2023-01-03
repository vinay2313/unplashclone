import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
     <Link to={"/"}> <h1>unsplash-clone</h1></Link>
      <ul>
        <li>Nature</li>
        <li>Sports</li>
        <li>Tech</li>
        <li>Food</li>
      </ul>
    </nav>
  )
}

export default Navbar