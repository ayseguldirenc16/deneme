import {  Routes, Route } from 'react-router-dom';
import Pages from './pages/Pages';
import Header from './component/Header/Header';
import './App.css'
import Data from './comman/flashDeals/Data'
import { useState } from 'react';
import Card from './component/cart/Card';

function App() {
  const {productItems} = Data 
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
                <Route path='/' element={<Pages productItems={productItems} addToCart={addToCart}  />} />
                <Route path='/card' element={<Card cardItem={cardItem} addToCart={addToCart}  />} />
              
              </Routes>
              


  
      
    </>
  );
}

export default App;
