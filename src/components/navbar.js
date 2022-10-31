import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';



export default function Navbar(props){
    return (
        <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${({ isActive }) => (isActive ? 'active' : 'inactive')}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${({ isActive }) => (isActive ? 'active' : 'inactive')}`} to="about">{props.about}</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-primary" type="submit">Search</button>
          </form> */}
        <div className={`form-check form-switch text-${props.mode ==='light' ? 'dark' : 'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btnText} Dark Mode</label>
</div>
        </div>
      </div>
    </nav>
        </>
      );
}
Navbar.propTypes ={
title: PropTypes.string.isRequired,
about: PropTypes.string
}

Navbar.defaultProps ={
    title: "Your title",
    about: "About"
}
