import React from 'react'
import Home from '../component/mainpage/Home'
import FlashDeals from '../comman/flashDeals/FlashDeals'
import TopCate from '../comman/top/TopCate'
import NewArrials from '../comman/newarrials/NewArrials'
import Discount from '../comman/discount/Discount'

function Pages({productItems, cardItem,addToCart}) {
  return (
    <>
      
      <Home cardItem={cardItem}   />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate/>
      <NewArrials/>
      <Discount/>
    </>
  )
}

export default Pages
