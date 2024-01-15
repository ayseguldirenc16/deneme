import {  Routes, Route } from 'react-router-dom';
import Pages from './pages/Pages';
import Header from './component/Header/Header';
import './App.css'
import Data from './comman/flashDeals/Data'
import { useState } from 'react';
import Card from './component/cart/Card';
import TopCate from './comman/top/TopCate';
import Sdata from './comman/shop/Sdata';

function App() {


  const decreaseQty= (product)=>{
    const productExit = cardItem.find((item)=>item.id===product.id)
    if(productExit.qty ===1){
      setCardItem(cardItem.filter((item)=>item.id !== product.id))
    }else{
      setCardItem(cardItem.map((item)=>(item.id===product.id ? {...productExit , qty:productExit.qty-1}:item)))
    }

  }
  const {productItems} = Data 
  const {shopItems} = Sdata 
  const [cardItem, setCardItem] = useState ([])


  const addToCart = (product)=>{
  const productExit = cardItem.find((item)=>item.id===product.id)

  if(productExit){
    setCardItem(cardItem.map((item)=> 
    (item.id===product.id? {...productExit, qty:productExit.qty+1}
      : item)))
  }else{
    setCardItem([...cardItem,{...product,qty:1}])
  }
  }
 

  return (
    <>
    
        <Header cardItem={cardItem} />
              <Routes>
                <Route path='/' 
                element={<Pages productItems={productItems} 
                addToCart={addToCart} shopItems={shopItems} />} />
                <Route path='/card' element={<Card cardItem={cardItem} addToCart={addToCart} decreaseQty={decreaseQty} />} />
                <Route path='/' element={<TopCate />} />
                
              </Routes>
              <TopCate/>
              


  
      
    </>
  );
}

export default App;
