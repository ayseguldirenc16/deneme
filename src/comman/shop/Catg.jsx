import React from 'react'

function Catg() {
    
        const data = [
          {
            cateImg: "./images/category/apple.jpg",
            cateName: "Apple",
          },
          {
            cateImg: "./images/category/samsung.jpg",
            cateName: "Samsung",
          },
          {
            cateImg: "./images/category/oppo.jpg",
            cateName: "Oppo",
          },
          {
            cateImg: "./images/category/vivo.jpg",
            cateName: "Vivo",
          },
          {
            cateImg: "./images/category/redmi.jpg",
            cateName: "Redmi",
          },
          {
            cateImg: "./images/category/sony.jpg",
            cateName: "Sony",
          },
        ]
  return (
    <>
      <div className="category">
        <div className="chead d_flex">
            <h1>Brands</h1>
            <h1>Shops</h1>
        </div>
        { data.map((item,index)=>{
                return(
                    <div className="box f_flex" key={index}>
                        <img src={item.cateImg} alt="" />
                        <span>{item.cateName} </span>
                    </div>
                )
            })}
        <div className="box box2">
        </div><button>Tümünü Görüntüle</button></div>
    </>
  )
}

export default Catg
