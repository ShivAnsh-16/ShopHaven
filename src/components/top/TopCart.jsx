import React from 'react'
import Tdata from './Tdata'
import Slider from "react-slick"

const TopCart = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint:712,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
  return (
    <>
        <Slider { ... settings}>
            {Tdata.map((value,iman) => {
                return(
                    <>
                        <div className="box product" key={iman}>
                                <div className="nametop d-flex">
                                    <span className='tleft'>{value.para}</span>
                                    <span className='tright'>{value.desc}</span>
                                </div>
                                <div className="img">
                                    <img src={value.cover} alt="" />
                                </div>
                        </div>
                    </>
                )
            })}
        </Slider>
    </>
  )
}

export default TopCart
