import React from 'react'

const catg = () => {
  const data = [
    {
      cateImg: "./assets/category/cat-1.png",
      cateName: "Apple",
    },
    {
      cateImg: "./assets/category/cat-2.png",
      cateName: "Samasung",
    },
    {
      cateImg: "./assets/category/cat-1.png",
      cateName: "Oppo",
    },
    {
      cateImg: "./assets/category/cat-2.png",
      cateName: "Vivo",
    },
    {
      cateImg: "./assets/category/cat-1.png",
      cateName: "Redmi",
    },
    {
      cateImg: "./assets/category/cat-2.png",
      cateName: "Sony",
    },
  ]
  return (
    <>
    <div className="category">
      <div className="chead d-flex">
        <h1>Brands</h1>
        <h1>Shops</h1>
      </div>
      {
      data.map((value,mos) => {
        return (
          <div className="box f-flex" key={mos}>
            <img src={value.cateImg} alt="" />
            <span>{value.cateName}</span>
          </div>
        )
      })}
      <div className="box box2"><button>More Brands</button></div>
    </div>
    </>
  )
}

export default catg
