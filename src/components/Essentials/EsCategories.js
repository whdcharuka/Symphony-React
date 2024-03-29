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
            <Link to="./Helthcare"><i class="fa fa-square" aria-hidden="true"><span>HEALTHCARE</span></i></Link>
            <Link to="./Grocery"><i class="fa fa-square" aria-hidden="true"><span>GROCERY</span></i></Link>
            <Link to="./Household"><i class="fa fa-square" aria-hidden="true"><span>HOUSE HOLD</span></i></Link>
            <Link to="./Baby"><i class="fa fa-square" aria-hidden="true"><span>BABY PRODUCTS</span></i></Link>
          </ul>
          </div>
      </div> 
    </>
  )
}

export default Categories

