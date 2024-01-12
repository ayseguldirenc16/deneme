import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus, faStar} from '@fortawesome/free-solid-svg-icons';

function FlashCard({productItems}) {
  return (
    <>
    {
    productItems.map((productItems )=>{
     <div className="box">
        <div className="product mtop">
            <div className="img">
                <span className='discount'>{{productItems} .indirimOrani}</span>
                <img src="" alt="" />
                <div className="product-like">
                    <label ></label> <br />
                    <i className="fa fa-heart"><FontAwesomeIcon icon={faHeart} /></i>
                </div>
            </div>
            <div className="product-details">
                <h3></h3>
                <div className="rate">
                    <i className="fa fa-star"><FontAwesomeIcon icon={faStar}/></i>
                    <i className="fa fa-star"><FontAwesomeIcon icon={faStar}/></i>
                    <i className="fa fa-star"><FontAwesomeIcon icon={faStar}/></i>
                    <i className="fa fa-star"><FontAwesomeIcon icon={faStar}/></i>
                    <i className="fa fa-star"><FontAwesomeIcon icon={faStar}/></i>
                </div>
                <div className="price">
                    <h4> </h4>
                    <button>
                        <i className="fa fa-plus"><FontAwesomeIcon icon={faPlus} /></i>
                    </button>

                </div>
            </div>
        </div>
     </div>
     })}

    </>
  )
}

export default FlashCard
