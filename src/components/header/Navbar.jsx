import React from 'react'
import {useState} from 'react'
import { Link } from "react-router-dom";
import {BsBorderAll} from 'react-icons/bs';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [showMobileCategory, setMobileCategory] = useState(false);
  const data = [
    {
        cateImg:"./assets/category/cat1.png",
        cateName:"Fashion",
    },
    {
        cateImg: "./assets/category/cat2.png",
        cateName: "Electronic",
      },
      {
        cateImg: "./assets/category/cat3.png",
        cateName: "Cars",
      },
      {
        cateImg: "./assets/category/cat4.png",
        cateName: "Home & Garden",
      },
      {
        cateImg: "./assets/category/cat5.png",
        cateName: "Gifts",
      },
      {
        cateImg: "./assets/category/cat6.png",
        cateName: "Music",
      },
      {
        cateImg: "./assets/category/cat7.png",
        cateName: "Health & Beauty",
      },
      {
        cateImg: "./assets/category/cat8.png",
        cateName: "Pets",
      },
      {
        cateImg: "./assets/category/cat9.png",
        cateName: "Baby Toys",
      },
      {
        cateImg: "./assets/category/cat10.png",
        cateName: "Groceries",
      },
      {
        cateImg: "./assets/category/cat11.png",
        cateName: "Books",
      },
]
  return (
    <>
      <div className="header">
        <div className="container c-flex">
            <div className="mobilecategories c-flex" onClick={() => {setMobileCategory(!showMobileCategory)}}>
                <span><BsBorderAll/></span>
                <h4>Categories</h4> 
                <i><MdOutlineKeyboardArrowDown className='icon'/></i>
            </div>
            <div className="categories c-flex">
                <span><BsBorderAll/></span>
                <h4>Categories</h4> 
                <i><MdOutlineKeyboardArrowDown className='icon'/></i>
            </div>
            <div className={`mobilecategory ${showMobileCategory ? "" : "hide"}`}>
            {data.map((value,hello) => {
                return(
                    <div className="box f-flex" key={hello} onClick={()=>setMobileCategory(false)}>
                        <img src={value.cateImg} alt="" />
                        <span>{value.cateName}</span>
                    </div>
                )
            })}
            </div>
            <div className={`navlink ${showMediaIcons ? "" : "hidden"}`}>
                <ul className="nav">
                    <li onClick={()=>setShowMediaIcons(false)}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li onClick={()=>setShowMediaIcons(false)}>
                        <Link to='/pages'>Pages</Link>
                    </li>
                    <li onClick={()=>setShowMediaIcons(false)}>
                        <Link to='/user'>User Account</Link>
                    </li>
                    <li onClick={()=>setShowMediaIcons(false)}>
                        <Link to='/vendor'>Vendor Account</Link>
                    </li>
                    <li onClick={()=>setShowMediaIcons(false)}>
                        <Link to='/track'>Track My Order</Link>
                    </li>
                    <li onClick={()=>setShowMediaIcons(false)}>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="hamburger-menu">
                <i onClick={() => {setShowMediaIcons(!showMediaIcons)}}><GiHamburgerMenu/></i>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
