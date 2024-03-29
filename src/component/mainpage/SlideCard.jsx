import Sdata from './Sdata'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Home.css'

function SlideCard ()  {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      appendDots:(dots)=>{
        return <ul style={{margin:"0px"}}>{dots} </ul>
      }
    };

  return (
   <>

    {/* <Slider {...settings}> */}
    {Sdata.map((item, index) =>{
     return(
         <div className="box d_flex top" key={index}>
         <div className="left">
             <h1>{item.title} </h1>
             <p>{item.desc} </p>
             <hr />             
             <button  className='btn-primary'>koleksiyona Gözat </button>
         </div>
         <div className="right">
             <img src={item.cover} alt="" style={{width:'100px'}}/>
         </div>
      </div>
     )
    })}
    {/* </Slider> */}
   
   
   </>
        



    
    
  )
}

export default SlideCard
