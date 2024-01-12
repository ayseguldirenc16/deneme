import React from 'react'
import Home from '../component/mainpage/Home'
import FlashDeals from '../comman/flashDeals/FlashDeals'

function Pages({productItems}) {
  return (
    <>
      
      <Home/>
      <FlashDeals productItems={productItems} />
    </>
  )
}

export default Pages
