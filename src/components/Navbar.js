import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

function Navbar() {
  return (
    <navbar className="navbar">
      <Link className="home-link" to="/">
        <h2>Top Recipe</h2>
      </Link>
    </navbar>
  )
}

export default Navbar
