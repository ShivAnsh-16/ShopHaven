import React from 'react'
import Ndata from './Ndata'

const Cart = () => {
  return (
    <>
      <div className="content grid box">
        {Ndata.map((val,mat) => {
            return(
                <div className="product" key={mat}>
                    <div className="img">
                        <img src={val.cover} alt="" />
                    </div>
                    <h4>{val.name}</h4>
                    <span>{val.price}</span>
                </div>
            )
        })}
      </div>
    </>
  )
}

export default Cart
