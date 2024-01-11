import React from 'react'
import Navbar from './Navbar'
import Head from './Head'
import Search from './Search'
import "./Header.css"
import { Router } from 'react-router-dom'





function Header() {
  return (
    <>
    <Router>
      <Head/>
      <Navbar/>
      <Search/>


    </Router>

   
      

   
    </>
  );
}

export default Header