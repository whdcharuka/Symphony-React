import React from "react"
import Categories from "../pages/Categories"
import SliderHome from "./Slider"
import HsCategories from "./HsCategories"

const Home = () => {
  return (
    <>
      <div className='cow2'>
        <Categories />
      </div>
      <div className='cow3'>
        <HsCategories />
      </div>
        <div className='container d_flex'>
          <SliderHome />
        </div>
    </>
  )
}

export default Home