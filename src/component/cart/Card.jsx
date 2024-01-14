import React from 'react'

function Card({cardItem, addToCart}) {
  return (
    <>
     <section className="card-items">
      <div className="container d_flex">
        <div className="card-details">
          {cardItem.length === 0 &&   <h1 className="no-items product">içerisi boş lütfen kart ekleyin</h1>}
        

        {cardItem.map((item)=>{
          const productQty = item.price * item.productQty
          return(
            <div className="card-list product id_flex">
              <div className="img">
                <img src={item.imageId} alt="" />
              </div>
            </div>
          )
        })}
        </div>
      </div>
     </section>
    </>
  )
}

export default Card
