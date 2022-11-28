import React from "react"
import Categories from "../pages/Categories"
import "../pages/Home.css"
import SliderHome from "./Slider"

const Home = () => {
  return (
    <>
      <section className='home'>
      <Categories />
        <div className='container d_flex'>
          <SliderHome />
        </div>
      </section>
    </>
  )
}

export default Home