import React from 'react'
import Home from '../component/mainpage/Home'
import FlashDeals from '../comman/flashDeals/FlashDeals'
import TopCate from '../comman/top/TopCate'
import NewArrials from '../comman/newarrials/NewArrials'
import Discount from '../comman/discount/Discount'
import Shop from '../comman/shop/Shop'
import Annocument from '../comman/annocument/Annocument'
import Wrapper from '../comman/Wrapper/Wrapper'
import Footer from '../component/Footer/Footer'

function Pages({productItems, cardItem,addToCart,shopItems}) {
  return (
    <>
      
      <Home cardItem={cardItem}   />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate/>
      <NewArrials/>
      <Discount/>
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annocument/>
      <Wrapper/>
      <Footer/>
    </>


  )
}

export default Pages
