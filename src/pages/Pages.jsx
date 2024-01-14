import React from 'react'
import Home from '../component/mainpage/Home'
import FlashDeals from '../comman/flashDeals/FlashDeals'

function Pages({productItems, cardItem,addToCart}) {
  return (
    <>
      
      <Home cardItem={cardItem}   />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
    </>
  )
}

export default Pages
