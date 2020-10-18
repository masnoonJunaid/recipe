import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

function Navbar() {
  return (
    <navbar className="navbar">
      <Link className="home-link" to="/">
        <b>Top Recipe</b>
      </Link>
    </navbar>
  )
}

export default Navbar
