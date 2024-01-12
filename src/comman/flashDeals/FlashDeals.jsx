import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt} from '@fortawesome/free-solid-svg-icons';
import FlashCard from './FlashCard';

function FlashDeals({productItems} ) {
    
  return (
    <>
      <section className="flash background">
        <div className="container">
            <div className="heading f_flex">
                <i className="fa fa-bolt"><FontAwesomeIcon  icon={faBolt} /></i>
                <h1>Flash Deals</h1>
            </div>  
        </div>
        <FlashCard productItems={productItems}/>
      </section>
    </>
  )
}

export default FlashDeals
