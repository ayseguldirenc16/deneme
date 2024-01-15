import React from "react"
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faHeadset, faIdCard, faShield, faTruckFast } from '@fortawesome/free-solid-svg-icons';

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'><FontAwesomeIcon icon={faTruckFast} /></i>,
      title: "Sorunsuz kargo",
      decs: "Türkiye'nin her iline kargomuz vardır. 3-5 iş günü içinde teslim edilmektedir.",
    },
    {
      cover: <i class='fa-solid fa-id-card'><FontAwesomeIcon icon={faIdCard} /></i>,
      title: "Güvenli Ödeme Yöntemleri",
      decs: "Havale, EFT, kapıda ödeme seçenekelerimiz mevcuttur.",
    },
    {
      cover: <i class='fa-solid fa-shield'><FontAwesomeIcon icon={faShield}/></i>,
      title: "Güvenli Koruma ",
      decs: "Verileriniz KVKK kapsamında güvenle korunmaktadır.",
    },
    {
      cover: <i class='fa-solid fa-headset'><FontAwesomeIcon icon={faHeadset}/></i>,
      title: "7/27 canlı destek hattı ",
      decs: "Bizimle günün her saati iletişime geçebilirsiniz",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((item, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{item.cover}<FontAwesomeIcon icon={faCircle}/></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper