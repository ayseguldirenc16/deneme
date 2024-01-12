import React from 'react'

function Categories() {
  const data = [
      {
        cateImg:"./images/category/cat1.jpg",
        cateName: "Kadın Giyim"
      },
      {
        cateImg:"./images/category/cat2.jpg",
        cateName: "Erkek Giyim"
      },
      {
        cateImg:"./images/category/cat3.jpg",
        cateName: "çocuk Giyim"
      },
      {
        cateImg:"./images/category/cat4.jpg",
        cateName: "Elektronik"
      },
      {
        cateImg:"./images/category/cat5.jpg",
        cateName: "Can dostlarımız/Pets"
      },
      {
        cateImg:"./images/category/cat7.jpg",
        cateName: "Ev/Çeyiz"
      },
      {
        cateImg:"./images/category/cat6.jpg",
        cateName: "Kitap/Kırtasiye"
      },
      {
        cateImg:"./images/category/cat8.jpg",
        cateName: "Müzik"
      },
      {
        cateImg:"./images/category/cat9.jpg",
        cateName: "Hediye Fikirleri"
      },
      {
        cateImg:"./images/category/cat10.jpg",
        cateName: "Cilt Bakım & Takviyeler"
      }
  ]
  return (
    <>
      <div className="category">
        {
          data.map((item,index)=>{
            return(
              <div className="box f_flex" key={index}>
                    <img src={item.cateImg} alt="" />
                    <span>{item.cateName} </span>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Categories
