import React from 'react'
import './style.css';
import {VscClose} from 'react-icons/vsc';
import {HiPlus, HiMinus} from 'react-icons/hi';

const Cart = ({cartItem, addToCart, decreaseQty ,removeQty}) => {
    const totalPrice = cartItem.reduce((price,item) => price + item.qty * item.price, 0)
  return (
    <>
    <section className="cart-items">
            <div className="container m-flex">
                <div className="cart-details">
                    {cartItem.length === 0 && <h1 className="no-items product">No Item are added in Cart</h1>}

                    {cartItem.map((item) =>{
                        const productQty = item.price * item.qty
                        return (
                            <div className="cart-list product d-flex">
                                <div className="img">
                                    <img src={item.cover} alt="" />
                                </div>
                                <div className="cart-details">
                                    <h3>{item.name}</h3>
                                    <h4>
                                        {item.price}.00 * {item.qty}
                                        <span>${productQty}.00</span>
                                    </h4>
                                </div>
                                <div className="cart-items-function">
                                    <div className="removeCart">
                                        <button className='removeCart' onClick={() => removeQty(item)}>
                                            <i><VscClose/></i>
                                        </button>
                                    </div>
                                    <div className="cartControl d-flex">
                                        <button className='inCart' onClick={() => addToCart(item)}>
                                            <i><HiPlus/></i>
                                        </button>
                                        <button className='desCart' onClick={() => decreaseQty(item)}>
                                            <i><HiMinus/></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                    <div className="cart-total product">
                        <h2>Cart Summary</h2>
                        <div className="d-flex">
                            <h4>Total Price : </h4>
                            <h3>${totalPrice}.00</h3>
                        </div>
                    </div>
            </div>
    </section>
    </>
  )
}

export default Cart
