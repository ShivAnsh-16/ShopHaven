import React from 'react'
import './Style.css'
import { BsCaretRightFill } from 'react-icons/bs'
import Cart from './Cart'

const NewArrivals = () => {
  return (
    <>
      <section className="newarrivals background">
          <div className="container">
          <div className="heading d-flex">
                <div className="heading-left row f-flex">
                    <img src="../assets/new.png" alt="" />
                    <h2>New Arrivals</h2>
                </div>
                <div className="heading-right row">
                    <span>View all</span>
                    <i><BsCaretRightFill/></i>
                </div>
            </div>
            <Cart/>
          </div>
      </section>
    </>
  )
}

export default NewArrivals
