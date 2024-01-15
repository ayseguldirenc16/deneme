import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';

function NewArrials() {
  return (
    <>
      <section className="newarrivals background">
        <div className="container">
            <div className="heading d_flex">
                        <div className="heading-left row f_flex">
                            <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
                            <h2>Yeni Ürünler</h2>
                        </div>
                        <div className='heading-right row '>
                            <span>Tümünü Görüntüle</span>
                            <i className='fa-solid fa-caret-right'><FontAwesomeIcon icon={faCaretRight}/></i>
                        </div>
            </div>
            <Card/>
        </div>
      </section>
    </>
  )
}

export default NewArrials
