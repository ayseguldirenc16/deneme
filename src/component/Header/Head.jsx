import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone , faEnvelope} from '@fortawesome/free-solid-svg-icons';

function Head() {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className='fa fa-phone'> <FontAwesomeIcon icon={faPhone} /> </i>
            <label>+90 555 555 55 55 </label>
            <i className="fa fa-envelope"><FontAwesomeIcon icon={faEnvelope} /></i>
            <label>ayseguldirenc16@gmail.com</label>
          </div>
          <div className="right row RText">
            <label >Dog Coffee</label>
            <label >Yardım ?</label>
            <span>🏳️</span>
            <label>EN</label>
            <span>🏳️</span>
            <label>TR</label>

          </div>
        </div>
      </section>
    </>
  )
}

export default Head
