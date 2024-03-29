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
            <Link to="./Violin"><i class="fa fa-square" aria-hidden="true"><span>VIOLINS</span></i></Link>
            <Link to="./Keyboard"><i class="fa fa-square" aria-hidden="true"><span>KEYBOARDS</span></i></Link>
            <Link to="./Piano"><i class="fa fa-square" aria-hidden="true"><span>PIANOS</span></i></Link>
            <Link to="./Drum"><i class="fa fa-square" aria-hidden="true"><span>DRUMSET</span></i></Link>
            <Link to="./Guitar"><i class="fa fa-square" aria-hidden="true"><span>GUITAR</span></i></Link>
          </ul>
          </div>
      </div> 
    </>
  )
}

export default Categories

