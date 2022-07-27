import React from 'react'
import AboutUs from '../components/aboutus/AboutUs'
import Announced from '../components/announcements/Announced'
import Discount from '../components/discount/Discount'
import FlashDeal from '../components/flashDeals/FlashDeal'
import Home from '../components/mainpage/Home'
import NewArrivals from '../components/newarrivals/NewArrivals'
import Shop from '../components/shop/Shop'
import TopCate from '../components/top/TopCate'

const Pages = ({productItems,addToCart ,cartItem ,shopItems }) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeal productItems={productItems} addToCart={addToCart} />
      <TopCate/>
      <NewArrivals/>
      <Discount/>
      <Shop shopItems={shopItems} addToCart={addToCart}/>
      <Announced/>
      <AboutUs/>
    </>
  )
}

export default Pages
