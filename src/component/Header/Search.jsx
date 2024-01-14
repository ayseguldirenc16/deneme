import React from 'react'
import './Header.css'
import logo from '../../assets/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSearch,faCircle, faShoppingBag, faUser} from '@fortawesome/free-solid-svg-icons';
import {Link } from 'react-router-dom';



function Search({cardItem}) {
  window.addEventListener("scroll",function(){
    const Search = this.document.querySelector(".Search")
    Search.classList.toggle("active", window.scrollY > 100)
  })
  return (
    <>
        <section className="Search">
          <div className="container c_flex">
              <div className="logo width">
                <img src={logo} alt=""  style={{width:'90px',height:'90px', borderRadius:'45px', margin:'5px', marginTop:'10px'}}/>
              </div>
            
              <div className="Search-box f_flex">
                <i className='fa fa-search'><FontAwesomeIcon icon={faSearch}/> </i>
                <input type="text" placeholder='Anahtar Kelime Yazınız...' />
                <span>Tüm Kategoriler</span>
            </div>
            <div className="icon f_flex width">
              {/* <i className="fa fa-user icon_circle"><FontAwesomeIcon icon={faCircle} /> </i> */}
              <div className="cart">
                <Link to="/card" >
                  <i className="fa fa-user icon-circle"><FontAwesomeIcon  icon={faUser} className='userIcon' /></i>
                  <i className='fa fa-shopping-bag icon-circle'><FontAwesomeIcon icon={faShoppingBag} className='Shopping'  /></i>
                  <span>{cardItem.length===0? "": cardItem.length}</span>
                </Link>
              </div>
            </div>
            
          </div>

        </section>
    </>
  )
}

export default Search