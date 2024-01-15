
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faStar, faHeart} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react"

const ShopCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      {shopItems.map((shopItems, index) => {
        return (
          <div className='box'>
            <div className='product mtop'>
              <div className='img'>
                <span className='discount'>{shopItems.discount}% Off</span>
                <img src={shopItems.cover} alt='' />
                <div className='product-like'>
                  <label>{count}</label> <br />
                  <i className='fa-regular fa-heart' onClick={increment}><FontAwesomeIcon icon={faHeart} /></i>
                </div>
              </div>
              <div className='product-details'>
                <h3>{shopItems.name}</h3>
                <div className='rate'>
                <i className="fa fa-star"><FontAwesomeIcon icon={faStar}/></i>
                <i className="fa fa-star"><FontAwesomeIcon icon={faStar}/></i>
                <i className="fa fa-star"><FontAwesomeIcon icon={faStar}/></i>
                <i className="fa fa-star"><FontAwesomeIcon icon={faStar}/></i>
                <i className="fa fa-star"><FontAwesomeIcon icon={faStar}/></i>
                </div>
                <div className='price'>
                  <h4>${shopItems.price}.00 </h4>
                  <button onClick={() => addToCart(shopItems)}>
                    <i className='fa fa-plus'><FontAwesomeIcon icon={faPlus} /></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart
