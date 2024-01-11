import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll, faChevronCircleDown} from '@fortawesome/free-solid-svg-icons';



function Navbar() {
  return (
    <>
      <header className='header'>
        <div className="container d_flex">
          <div className="categories">
            <span className='fa-solid fa-border-all'><FontAwesomeIcon icon={faBorderAll} /></span> 
             <h4>Kategoriler <i><FontAwesomeIcon icon={faChevronCircleDown} /></i></h4>
          </div>
         
        </div>
      </header>
    </>
  )
}

export default Navbar