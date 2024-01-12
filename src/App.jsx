import { Router, Routes, Route } from 'react-router-dom';
import Pages from './pages/Pages';
import Header from './component/Header/Header';
import './App.css'
import Datam from './comman/flashDeals/Datam';
import { useState } from 'react';

function App() {
  const {productItems} = Datam 
  const [cardItem, setCardItem] = useState ([])
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Pages productItems={productItems}  />} />
        
      </Routes>
    </>
  );
}

export default App;
