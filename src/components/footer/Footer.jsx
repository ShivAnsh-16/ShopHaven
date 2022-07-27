import React from 'react'
import { BsFacebook, BsGithub, BsGoogle, BsInstagram, BsLinkedin, BsPhoneFill, BsTwitter } from 'react-icons/bs'
import { FaAppStore, FaCcDiscover, FaCcVisa, FaGooglePay, FaGooglePlay, FaHome, FaPaypal, FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import './Style.css'

const Footer = () => {
  return (
    <>
      <footer>
                <div className="container icons">
                    <i><BsFacebook/></i>
                    <i><BsInstagram/></i>
                    <i><BsTwitter/></i>
                    <i><BsGoogle/></i>
                    <i><BsLinkedin/></i>
                    <i><BsGithub/></i>
                </div>
                <hr />
        <div className="container grid3">
            <div className="box">
                    <h1>ShopHaven</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum perferendis quod quo optio ut velit quae iusto saepe ipsum molestias.</p>
                    <button className='btn'><i><FaGooglePlay/></i>Google Play</button>
                    <button className='btn'><i><FaAppStore/></i>App Store</button>
                    <div className="sponsor">
                        <i><FaCcVisa/></i>
                        <i><FaCcDiscover/></i>
                        <i><FaGooglePay/></i>
                        <i><FaPaypal/></i>
                    </div>
            </div>
            <div className="box">
                <h3>About Us</h3>
                <ul>
                    <li>Careers</li>
                    <li>Our Stores</li>
                    <li>Our Cares</li>
                    <li>Terms & Conditions</li>
                    <li>Provacy Policy</li>
                </ul>
            </div>
            <div className="box">
                <h3>Customer Care</h3>
                <ul>
                    <li>Help Center</li>
                    <li>How to Buy</li>
                    <li>Track Your Order</li>
                    <li>Corporate & Bulk Purchasing</li>
                    <li>Return & Refunds</li>
                </ul>
            </div>
            <div className="box">
                <h3>Contact</h3>
                <div className="link">
                    <i><FaHome/></i>
                    <span> New York, NY12345, USA</span>
                </div>
                <div className="link">
                    <i><MdEmail/> </i>
                    <span> info@example.com</span>
                </div>
                <div className="link">
                    <i><FaPhone/> </i>
                    <span> + 01 234 567 89</span>
                </div>
                <div className="link">
                    <i><BsPhoneFill/></i>
                    <span> + 09 876 543 21</span>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
