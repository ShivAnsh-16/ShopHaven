import React from 'react'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import FlashCard from './FlashCard'

const FlashDeal = ({productItems, addToCart}) => {
  return (
    <>
      <section className="flash background">
        <div className="container ">
            <div className="heading f-flex">
                <i><BsFillLightningChargeFill/></i>
                <h1>Flash Deals</h1>
            </div>
            <FlashCard productItems={productItems} addToCart={addToCart}/>
        </div>
      </section>
    </>
  )
}

export default FlashDeal
