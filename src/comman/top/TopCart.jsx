import React from 'react'
import Tdata from './Tdata'
import Slider from "react-slick";


function TopCart() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoPlay: true,
  };
  
  return (
    <>
     <Slider {...settings}>
      {
        Tdata.map((item,index)=>{
          return(
            <div className="box product" key={index}>
              <div className="nameTop d_flex">
                <span className="tleft">{item.para}</span>
                <span className="tRight">{item.desc}</span>
              </div>
              <div className="img">
                <img src={item.imageId} alt="" />
              </div>
            </div>
          )
        })
      }
      </Slider>
   
    </>
  )
}

export default TopCart
