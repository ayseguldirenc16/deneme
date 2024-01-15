import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import TopCart from './TopCart';
import './style.css'
function TopCate() {
  return (
    <>
      <section className='topCat background'>
            <div className="container">
            <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <i className='fa-solid fa-border-all'></i>
             
            </div>
            <div className='heading-right row '>
            <span>Tümünü Görüntüle</span>
              <i className='fa-solid fa-caret-right'><i className="fa fa-caret-right"><FontAwesomeIcon icon={faCaretRight} /></i></i>
            </div>
          </div>
                <TopCart/>
            </div>
        </section>
    </>
  )
}

export default TopCate
