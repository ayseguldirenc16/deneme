import React from "react"

const Annocument = () => {
  const style = {
    width: "30%",
    height: "340px",
  }
  const style1 = {
    width: "68%",
    height: "340px",
  }
  return (
    <>
      <section className='annocument background'>
        <div className='container d_flex'>
          <div className='img' style={style}>
            <img src='./images/category/banner-1.png' width='100%' height='100%' />
          </div>
          <div className='img' style={style1}>
            <img src='./images/category/banner-2.png' width='100%' height='100%' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument