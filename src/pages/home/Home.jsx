import React from 'react'
import profile from '../../assets/profile-2.jpg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin, faReact, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import './Home.css'
const Home = () => {
  return (
    <div>
      <div className="container home-main " >
        <div className="row h-100 align-items-center justify-content-evenly">
          <div className=" col-auto h-50 profile-title  ">
            <div className=" name-div ms-5 ps-5 text-white">
       <span className='display-3 react-icon'><FontAwesomeIcon icon={faReact}/></span>
             
              <h1 className=' fw-bold  ms-3 helo'> Hello <span>i'm</span></h1> 
                <h5 className='tpurple display-4 fw-bold profile-name'> Bisworanjan</h5>
              <p className=' frontend '>Frontend-web-developer </p>
              <div className="div d-flex gap-4 social-icon ">
               <Link to={'https://www.facebook.com/profile.php?id=100089866887504'}><p><FontAwesomeIcon icon={faFacebook}/></p></Link> 
                <p><FontAwesomeIcon icon={faWhatsapp}/></p>
                <p><FontAwesomeIcon icon={faInstagram}/></p>
               <Link to={'https://www.linkedin.com/in/bisworanjan-sahoo-10075031a/'}> <p><FontAwesomeIcon icon={faLinkedin}/></p></Link>
               <Link to={'https://github.com/Bisworanjan34'}><p><FontAwesomeIcon icon={faGithub}/></p></Link>

              </div>
              <button className='btn1 mt-2 '>Hire me</button>
             <Link to={'/about'}> <button className='btn2 mt-2' >About me</button></Link>
            </div>
          </div>
          <div className="col-auto text-center  h-75   profile-img">
            <div className='profile-img-div  overflow-hidden '>
            <img src={profile} alt=""  className=''  />
            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
