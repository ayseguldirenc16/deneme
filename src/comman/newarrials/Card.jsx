import React from 'react'
import Ndata from './Ndata'

function Card() {
  return (
    <>
      <div className="content grid product">
        {Ndata.map((item,index)=>{
            return(
                <div className="box" key={index}>
                    <div className="img">
                        <img src={item.imageId} alt="" />
                    </div>
                    <h4>{item.name} </h4>
                    <span>{item.price} </span>
                </div>
            )
        })}
      </div>
    </>
  )
}

export default Card
