import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLongArrowAltLeft, faLongArrowAltRight, faPlus, faStar} from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";

function FlashCard({productItems, addToCart}) {
    const [count, setCount] = useState(0)
    const increment = ()=>{
        setCount(count+1)
    }
    const NextArrow=(props)=>{
        const {onClick}= props
        return(
            <div className='control-btn' onClick={onClick}>
                <button className='next'>
                    <i className="faf fa-long-arrow-alt-right"><FontAwesomeIcon  icon={faLongArrowAltRight} /></i>
                </button>
            </div>
        )
    }

    const PrevArrow=(props)=>{
        const {onClick}= props
        return(
            <div className='control-btn' onClick={onClick}>
                <button className='prev'>
                    <i className="faf fa-long-arrow-alt-left"><FontAwesomeIcon  icon={faLongArrowAltLeft} /></i>
                </button>
            </div>
        )
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    
  return (
    <>
     <Slider {...settings}>
    {
    productItems.map((productItems)=>{
        return(
     <div className="box" key={productItems.id}>
        <div className="product mtop">
            <div className="img">
                <span className='discount'>{productItems.discount}%off</span>
                <img src={productItems.imageId} alt="" style={{width:'40%'}} />
                <div className="product-like">
                    <label > 0 </label> <br />
                    <i className="fa fa-heart" onClick={increment}><FontAwesomeIcon icon={faHeart} /></i>
                </div>
            </div>
            <div className="product-details">
                <h3> {productItems.name} </h3>
                <div className="rate">
                    <i className="fa fa-star"><FontAwesomeIcon icon={faStar}/></i>
                    <i className="fa fa-star"><FontAwesomeIcon icon={faStar}/></i>
                    <i className="fa fa-star"><FontAwesomeIcon icon={faStar}/></i>
                    <i className="fa fa-star"><FontAwesomeIcon icon={faStar}/></i>
                    <i className="fa fa-star"><FontAwesomeIcon icon={faStar}/></i>
                </div>
                <div className="price">
                    <h4> {productItems.stok}.00 </h4>
                    <button onClick={()=>addToCart(productItems)}>
                        <i className="fa fa-plus"><FontAwesomeIcon icon={faPlus} /></i>
                    </button>

                </div>
            </div>
        </div>
     </div>
     )
     })}
    </Slider>
    </>
  )
}

export default FlashCard
