import React from "react"
import { Link } from "react-router-dom"
import '../pages/SubCategories.css';

const Categories = () => {
  const data = [
    {
      path:"/",
      cateName: "TEDDY BEAR",
    },
    {
      path:"/Battery",
      cateName: "BICYCLES",
    },
    {
      path:"/Wheel",
      cateName: "CAR",
    }, 
    {
      path:"Fuel Tank",
      cateName: "DOLLS",
    },
    {
      path:"/Windscreen",
      cateName: "ANIMAL TOYS",
    },
    // {
    //   path:"/Windshield wipers",
    //   cateName: "Windshield wipers",
    // },
    // {
    //   path:"/Seat belt",
    //   cateName: "Seat belt",
    // },
    // {
    //   path:"/Radiator",
    //   cateName: "Radiator",
    // },
    // {
    //   path:"/Gear Lever",
    //   cateName: "Gear Lever",          
    // },
    // {
    //   path:"/Muffler",
    //   cateName: "Muffler",
    // },
    // {
    //   path:"/Alternator",
    //   cateName: "Alternator",
    // },
    // {
    //   path:"/Front Axle",
    //   cateName: "Front Axle",
    // },
  ]

  return (
    <>
      <div className='vcategory'>
      <h3 className='types'>TYPES</h3>
        {data.map((value, index) => {
          return (
            <Link to={value.path} className='abc'>
              <div className='box f_flex1' key={index}>
              <i class="fa fa-square" aria-hidden="true"><span>{value.cateName}</span></i>
              </div>
            </Link>
          )
        })}
        <br></br>
        <h3 className='types'></h3>
        <h3 className='types'>AVAILABILITY</h3>
        
            <Link to='/Instock' className='abc'>
              <div className='box f_flex1'>
              <i class="fa fa-square" aria-hidden="true"><span>IN STOCK</span></i>
              </div>
            </Link>

            <Link to='/Outstock' className='abc'>
              <div className='box f_flex1'>
              <i class="fa fa-square" aria-hidden="true"><span>OUT  OF STOCK</span></i>
              </div>
            </Link>
          
      </div> 
    </>
  )
}

export default Categories

