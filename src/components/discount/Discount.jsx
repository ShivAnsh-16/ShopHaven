import React from 'react'
import { BsCaretRightFill } from 'react-icons/bs'
import Dcard from './Dcard'

const Discount = () => {
  return (
    <>
      <section className="disocunt background newarrivals">
        <div className="container">
            <div className="heading d-flex">
                <div className="heading-left row f-flex">
                    <img src="../assets/gift.png" alt="" />
                    <h2>Big Discounts </h2>
                </div>
                <div className="heading-right row">
                    <span>View all</span>
                    <i><BsCaretRightFill/></i>
                </div>
            </div>
            <Dcard/>
        </div>
      </section>
    </>
  )
}

export default Discount
