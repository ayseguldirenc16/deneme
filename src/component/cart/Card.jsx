import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './style.css'


function Card({cardItem, addToCart, decreaseQty}) {
  const totalPrice = cardItem.reduce((price, item)=>
    price + item.qty * item.price ,0)
  return (
    <>
    
    <section className='cart-items'>
    <div className='container d_flex'>
      <div className='cart-details'>
      {cardItem.length === 0 &&   <h1 className="no-items product">içerisi boş lütfen ürün  ekleyin</h1>}

        
      {cardItem.map((item)=>{
          const productQty = item.price * item.qty

          return (
            <div className='cart-list product d_flex' key={item.id}>
              <div className='img'>
                <img src={item.imageId} alt='' style={{width:'30%'}}/>
              </div>
              <div className='cart-details'>
                <h3>{item.name}</h3>
                <h4>
                  ${item.stok}.00 * {item.qty}
                  <span>${productQty}.00</span>
                </h4>
              </div>
              <div className='cart-items-function'>
                <div className='removeCart'>
                  <button className='removeCart'>
                  <i className="fa fa-solid fa-xmark"><FontAwesomeIcon icon={faXmark} /></i>
                  </button>
                </div>
                <div className='cartControl d_flex'>
                  <button className='incCart' onClick={() => addToCart(item)}>
                  <i className="fa fa-plus"><FontAwesomeIcon icon={faPlus} /></i>
                  </button>
                  <button className='desCart' onClick={() => decreaseQty(item)}>
                  <i className="fa fa-minus"><FontAwesomeIcon icon={faMinus} /></i>
                  </button>
                </div>
              </div>

              <div className='cart-item-price'></div>
            </div>
          )
        })}
      </div>

      <div className='cart-total product'>
        <h2>Sipariş Detayları</h2>
        <div className=' d_flex'>
          <h4>Toplam Tutar:</h4>
          <h3>${totalPrice}.00</h3>
        </div>
      </div>
    </div>
  </section>

  </>
  )}
export default Card
