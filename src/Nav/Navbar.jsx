import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active"  to="/Ex4">Ex4</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Ex3">Ex3</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar
