import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
const Navbar = () => {
  return (
    <div className=' background container-fluid  m-0 p-0 '>
    <div className='container'>
    <nav className="navbar navbar-expand-sm text-white">
      <Link to='/' className="navbar-brand">Portfolio</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active me-5">
            <Link to='/' className="nav-link m">Home <span className="sr-only"></span></Link>
          </li>
          <li className="nav-item me-5">
            <Link to='/projects' className="nav-link" >Projects</Link>
          </li>
          <li className="nav-item me-5">
            <Link to='/blogs' className="nav-link">Blogs</Link>
          </li>
        </ul>
      </div>
    </nav>  
    </div> 
    </div>
          )
          
          
}

export default Navbar