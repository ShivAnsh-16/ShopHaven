import React from 'react'
import {useState} from 'react'
import { BsPlus, BsStarFill } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'


const ShopCart = ({shopItems, addToCart}) => {
const [count, setCount] = useState(0)
const increment = () => {
  setCount(count+1)
}

  return (
    <>
    {
      shopItems.map((shopItems) => {
      return (
      <div className="box">
        <div className="product mtop">
            <div className="img">
                <span className='discount'>{shopItems.discount}% Off</span>
                <img src={shopItems.cover} alt="" />
                <div className="product-like">
                    <label>0</label><br />
                    <i><FiHeart/></i>
                </div>
            </div>
            <div className="product-details">
                <h3>{shopItems.name}</h3>
                <div className="rate">
                    <i onClick={increment}><BsStarFill/></i>
                    <i><BsStarFill/></i>
                    <i><BsStarFill/></i>
                    <i><BsStarFill/></i>
                    <i><BsStarFill/></i>
                    <i><BsStarFill/></i>
                </div>
                <div className="price">
                  <h4>$ {shopItems.price} .00</h4>
                  <button >
                    <i onClick={() => addToCart(shopItems)}><BsPlus/></i>
                  </button>
                </div>
            </div>
        </div>
      </div>
      )
      })}
    </>
  )
}

export default ShopCart