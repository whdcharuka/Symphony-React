import React from "react"
import "../pages/Wrapper.css"
import '../../App.css';
import { Link } from "react-router-dom"
import FbCategories from "./FbCategories"
import Categories from "../pages/Categories"

const Wrapper = () => {
  const data = [
    {
      path:"./Vp1",
      cateImg: "./images/Fashion/5.jpg",
      title: "Horn ",
      brand:"Apple",
      model:"single",
      decs: "You can use decorate your table Table suitable",
      phone:"021548936",
      email:"ergset@gmail.com",
    },
    {
      path:"./Vp2",
      cateImg: "./images/Fashion/6.jpg",
      title: "Air filter ",
      brand:"Apple",
      model:"single",
      decs: "You can use decorate your table Table suitable",
      phone:"021548936",
      email:"ergset@gmail.com",
    },
    {
      path:"./Vp3",
      cateImg: "./images/Fashion/7.jpg",
      title: "Fuel filter ",
      brand:"Apple",
      model:"single",
      decs: "You can use decorate your table Table suitable",
      phone:"021548936",
      email:"ergset@gmail.com",
    },
    // {
    //   path:"./Vp4",
    //   cateImg: "./images/Fashion/8.jpg",
    //   title: "Oil filter ",
    //   brand:"Apple",
    //   model:"single",
    //   decs: "You can use decorate your table Table suitable",
    //   phone:"021548936",
    //   email:"ergset@gmail.com",
    // },
  ]
  return (
    <>
    <h1 className='qwe3'>Clothing</h1>
    <div className="cow">
      <Categories />
    </div>
      <FbCategories/>
      <section className='wrapper wbackground'>
        <div className='wcontainer1 grid9'>
          {data.map((val, index) => {
            return (
              <div className='vpproduct' key={index}>
                <div>
                <img src={val.cateImg} alt='' />
                </div>
                <h2>{val.title}</h2>
                <p>{val.brand}</p>
                <p>{val.model}</p>
                <p>{val.decs}</p>
                <p>Whatsapp : {val.phone}</p>
                <p>{val.email}</p>
                <p><link rel = "canonical" href = "https://www.javatpoint.com/"  />    
                   <Link to={val.phone}><button className='btn--medium'>CONTACT</button></Link></p>
              </div>
            ) 
          })}
        </div>
      </section> 
    </>
  )
}

export default Wrapper