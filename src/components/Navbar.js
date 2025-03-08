import React from 'react'
import { Link } from 'react-scroll'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="NSY Logo" className="logo-img" />
      <ul>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500}>
            Services
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
