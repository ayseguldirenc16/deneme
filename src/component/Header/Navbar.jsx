import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll, faChevronCircleDown} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function Navbar() {
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
                <Link></Link>
              </li>
            </ul>
          </div>
         
        </div>
      </header>
    </>
  )
}

export default Navbar