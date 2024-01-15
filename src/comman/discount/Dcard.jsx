import React from 'react'
import Ddata from './Ddata'
import Slider from "react-slick";

function Dcard() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoPlay: true,
    marign: 20,
  };
  return (
    <><Slider {...settings}>
      
        {Ddata.map((item,index)=>{
            return(
              <>
                <div className="product" key={index}>
                   <div className="box">
                    <div className="img">
                        <img src={item.imageId} alt="" width='100%'/>
                    </div>
                    <h4>{item.name} </h4>
                    <span>{item.price} </span>
                </div>
                </div>
                </>
            )
        })}
        </Slider>
     
    </>
  )
}

export default Dcard
