import React from 'react'
import Catg from './Catg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import ShopCard from './ShopCard';
import './style.css'

function Shop({shopItems , addToCart}) {
  return (
    <>
     <section className="shop background">
        <div className="container d_flex ">
            <Catg/>


            <div className="contentWidth">
            <div className="heading d_flex">
                        <div className="heading-left row f_flex">
                            <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
                            <h2>Cep Telefonları & Aksesuarlar</h2>
                        </div>
                        <div className='heading-right row '>
                            <span>Tümünü Görüntüle</span>
                            <i className='fa-solid fa-caret-right'><FontAwesomeIcon icon={faCaretRight}/></i>
                        </div>
            </div>
            <div className="product-content grid1">
                <ShopCard  shopItems={shopItems} addToCart={addToCart} />
            </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default Shop
