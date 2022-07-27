import React from 'react'
import {useState} from 'react'
import { BsPlus, BsStarFill } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { ImArrowLeft2, ImArrowRight2 } from 'react-icons/im'
import Slider from 'react-slick'

const NextArrow =(props) => {
  const {onClick} = props
  return(
    <div className="control-btn" onClick={onClick}>
      <button className='next'>
        <i><ImArrowRight2/></i>
      </button>
    </div>
  )
}
const PrevArrow =(props) => {
  const {onClick} = props
  return(
    <div className="control-btn" onClick={onClick}>
      <button className='prev'>
        <i><ImArrowLeft2/></i>
      </button>
    </div>
  )
}
const FlashCard = ({productItems, addToCart}) => {
const [count, setCount] = useState(0)
const increment = () => {
  setCount(count+1)
}

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 712,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
  };
  return (
    <>
    <Slider { ... settings}>
    {
      productItems.map((productItems) => {
      return (
      <div className="box">
        <div className="product mtop">
            <div className="img">
                <span className='discount'>{productItems.discount}% Off</span>
                <img src={productItems.cover} alt="" />
                <div className="product-like">
                    <label>0</label><br />
                    <i><FiHeart/></i>
                </div>
            </div>
            <div className="product-details">
                <h3>{productItems.name}</h3>
                <div className="rate">
                    <i onClick={increment}><BsStarFill/></i>
                    <i><BsStarFill/></i>
                    <i><BsStarFill/></i>
                    <i><BsStarFill/></i>
                    <i><BsStarFill/></i>
                    <i><BsStarFill/></i>
                </div>
                <div className="price">
                  <h4>$ {productItems.price} .00</h4>
                  <button >
                    <i onClick={() => addToCart(productItems)}><BsPlus/></i>
                  </button>
                </div>
            </div>
        </div>
      </div>
      )
      })}
    </Slider>
    </>
  )
}

export default FlashCard