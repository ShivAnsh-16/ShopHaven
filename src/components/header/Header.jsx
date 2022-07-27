import React from 'react'
import './Header.css'
import Search from './Search'
import Navbar from './Navbar'

const Header = ({cartItem}) => {
  return (
    <>
    <Search cartItem={cartItem}/>
    <Navbar/>
    </>
  )
}

export default Header
