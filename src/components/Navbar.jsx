import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../assets/profile-2.jpg'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
    <div className="container-fluid py-2" style={{height:'40px'}}>
             <div className='row '>
              <div className="col-3  text-end">
                <div className="nav-logo-t col-6 fst-italic p-0 ">
                 <h5 className='mt-1'><span className='twht'>B</span>iswo</h5>
                </div>
              </div>
            <div className="col-5 mt-2 d-flex gap-lg-4 gap-md-3 gap-2 links ">
                <Link to={'/'}><h5>Home</h5></Link>
                <Link to={'/about'}><p>About</p></Link>
                <Link to={'/contact'}><p>Contact</p></Link>
                <Link to={'/service'}><p>Service</p></Link>
            </div>
             </div>
    </div>
    </div>
  )
}

export default Navbar
