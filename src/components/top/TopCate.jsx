import React from 'react'
import { BsCaretRightFill } from 'react-icons/bs'
import { FaBorderAll} from 'react-icons/fa'
import TopCart from './TopCart'
import './Style.css'

const TopCate = () => {
  return (
    <>
      <section className="topCat background">
        <div className="container">
            <div className="heading d-flex">
                <div className="heading-left row f-flex">
                    <i><FaBorderAll/></i>
                    <h2>Top Categories</h2>
                </div>
                <div className="heading-right row">
                    <span>View all</span>
                    <i><BsCaretRightFill/></i>
                </div>
            </div>
            <TopCart/>
        </div>
      </section>
    </>
  )
}

export default TopCate
