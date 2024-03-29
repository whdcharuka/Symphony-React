import React from "react"
import { Link } from "react-router-dom"
import '../../App.css';

const Categories = () => {
  
  return (
    <>
      <div className='vcategory'>
      <h3 className='types'>TYPES</h3>
        <div className='box '>
          <ul>
            <Link to="./Sport"><i class="fa fa-square" aria-hidden="true"><span>SPORTS</span></i></Link>
            <Link to="./Travelling"><i class="fa fa-square" aria-hidden="true"><span>TRAVELLING ITEMS</span></i></Link>
            <Link to="./Art"><i class="fa fa-square" aria-hidden="true"><span>ARTS</span></i></Link>
            <Link to="./Gym"><i class="fa fa-square" aria-hidden="true"><span>GYM ITEMS</span></i></Link>
            <Link to="./Collection"><i class="fa fa-square" aria-hidden="true"><span>COLLECTIONS </span></i></Link>
          </ul>
          </div>
      </div> 
    </>
  )
}

export default Categories