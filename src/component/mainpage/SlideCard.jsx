import React from 'react'
import Sdata from './Sdata'

function SlideCard() {
  return (
    <>
   {Sdata.map((item, index) =>{
    return(
        <div className="box d_flex top" key={index}>
        <div className="left">
            <h1>{item.title} </h1>
            <p>{item.desc} </p>
            <button  className='btn-primary'>koleksiyona Gözat </button>
        </div>
        <div className="right">
            <img src={item.cover} alt="" />
        </div>
     </div>
    )
   })}
    </>
  )
}

export default SlideCard
