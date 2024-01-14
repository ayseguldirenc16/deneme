import React from 'react'
import Navbar from './Navbar'
import Head from './Head'
import Search from './Search'
import "./Header.css"






function Header({cardItem}) {
  return (
    <>
   
      <Head/>
      <Search  cardItem={cardItem} />
      <Navbar/>
      



   
      

   
    </>
  );
}

export default Header