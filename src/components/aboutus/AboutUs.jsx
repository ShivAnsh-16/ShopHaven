import React from 'react'
import './Style.css'
import { FaHeadset, FaIdCard } from 'react-icons/fa'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { TbTruckDelivery } from 'react-icons/tb'

const AboutUs = () => {
    const data = [
        {
          cover: <i><TbTruckDelivery/> </i>,
          title: "Worldwide Delivery",
          decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minus obcaecati labore?",
        },
        {
          cover: <i><FaIdCard/></i>,
          title: "Safe Payment",
          decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minus obcaecati labore?",
        },
        {
          cover: <i><RiSecurePaymentLine /></i>,
          title: "Shop With Confidence ",
          decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minus obcaecati labore?",
        },
        {
          cover: <i><FaHeadset/></i>,
          title: "24/7 Support ",
          decs: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minus obcaecati labore?" ,
        },
      ]
  return (
    <>
      <section className="aboutus background">
          <div className="container grid2">
            {
                data.map((value,index) =>{
                    return (
                        <>
                        <div className="product" key={index}>
                            <div className="img">
                                <i>{value.cover}</i>
                            </div>
                            <h3>{value.title}</h3>
                            <p>{value.decs}</p>
                        </div>
                        </>
                )})
            }
          </div>
      </section>
    </>
  )
}

export default AboutUs
