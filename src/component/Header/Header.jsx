import React from 'react'
import Navbar from './Navbar'
import Head from './Head'
import Search from './Search'
import "./Header.css"
import { BrowserRouter as Router } from 'react-router-dom';





function Header() {
  return (
    <>
    <Router>
      <Head/>
      <Search/>
      <Navbar/>
      


    </Router>

   
      

   
    </>
  );
}

export default Header