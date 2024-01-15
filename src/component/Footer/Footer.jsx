import React from "react"
import "./styleFooter.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import { faAppStore, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import logo from '../../assets/logo.jpg'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
          <img src={logo} alt=""  style={{width:'90px',height:'90px', borderRadius:'45px', margin:'5px', marginTop:'10px'}}/>
            <p>Aşağıdaki platformlardan uygulamamızı indirip bizlerle destek olabilirsiniz.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'><FontAwesomeIcon icon={faGooglePlay}/></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'><FontAwesomeIcon icon={faAppStore}/></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>Hakkımızda</h2>
            <ul>
              <li>Kariyer</li>
              <li>Hikayemiz</li>
              <li>şartlar ve koşullar</li>
              <li>Gizlilik Politikası</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Müşteri Hizmetleri</h2>
            <ul>
              <li>Yardım Merkezi </li>
              <li>Nasıl alınır? </li>
              <li>Sipariş etmek için tıklayınız</li>
              <li>Kurumsal & Toplu  </li>
              <li>iadeler ve geri ödemeler </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Bize Ulaşın</h2>
            <ul>
              <li> Kestel , Bursa</li>
              <li>Email: ayseguldirenc16@gmail.com</li>
              <li>Telefon: +90 555 555 55 55 </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer