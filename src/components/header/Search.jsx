import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'
import {FaShoppingBag} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Search = ({cartItem}) => {
  return (
    <div>
        <section className="search">
            <div className="container search-bar">
                <div className="logo width">
                    <h1 className='stroke-text'>SHOP HAVEN</h1>
                </div>
                <div className="search-box f-flex">
                    <BsSearch className='sicon'/>
                    <input type="text" placeholder='Search...' />
                    <span>All Category</span>
                </div>
                <div className="picon f-flex ">
                     <FaUserAlt className='carticon'/>
                     <div className="cart">
                        <Link to="/cart">
                            <FaShoppingBag className='carticon'/>
                            <span>{cartItem.length === 0 ? 0: cartItem.length}</span>
                        </Link>
                     </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Search
