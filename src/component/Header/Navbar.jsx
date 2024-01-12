import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBorderAll, faChevronCircleDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';




function Navbar() {
  const [MobileMenu, setMobileMenu]= useState(false)

  return (
    <>
      <header className='header'>
        <div className="container d_flex">
          <div className="categories">
            <span className='fa-solid fa-border-all'><FontAwesomeIcon icon={faBorderAll} /></span> 
             <h4>Kategoriler <i><FontAwesomeIcon icon={faChevronCircleDown} /></i></h4>
          </div>
          <div className="navLink">
            <ul className="nav">
              <li>
                <Link to="/" >Anasayfa</Link>
                
              </li>
              <li>
              <Link to="/user" >Üye Girişi</Link>
              </li>
              <li>
              <Link to="/vendor" >SSS</Link>
              </li>
              <li>
              <Link to="/track" >Siparişim Nerede ? </Link>
              </li>
              <li>
              <Link to="/contact" >İletişim</Link>
              </li>
            </ul>

           
          </div>
         
        </div>
      </header>
    </>
  )
}



                
                

export default Navbar