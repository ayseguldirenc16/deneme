import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Dcard from './Dcard';

function Discount() {
  return (
    <>
      <section className='Discount background NewArrivals'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <img src='https://img.icons8.com/windows/32/fa314a/gift.png' />
              <h2>Büyük İndirimler</h2>
            </div>
            <div className='heading-right row '>
              <span>Tümünü Görüntüle</span>
              <i className='fa-solid fa-caret-right'><FontAwesomeIcon icon={faCaretRight}/></i>
            </div>
          </div>
          <Dcard />
        </div>
      </section>
    </>
  )
}

export default Discount


