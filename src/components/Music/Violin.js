// import React from 'react';
// import '../../App.css';
// import MuCategories from './MuCategories';
// import MuItem from './MuItem';

// function Home() {
//   return (
//     <>
//       <section>
//         <h1 className='qwe3'>Violine</h1>
//         <div className='container g_flex'>
//           <MuCategories />
//             <div className='qwe1'>
//                <MuItem />
//             </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Home;


import React from "react"
import "../pages/Wrapper.css"
import '../../App.css';
import { Link } from "react-router-dom"
import MuCategories from "./MuCategories"

const Wrapper = () => {
  const data = [
    {
      path:"./Vp1",
      cateImg: "./images/Music/1.jpg",
      title: "Horn ",
      brand:"Apple",
      model:"single",
      decs: "You can use decorate your table Table suitable",
      phone:"021548936",
      email:"ergset@gmail.com",
    },
    {
      path:"./Vp2",
      cateImg: "./images/Music/2.jpg",
      title: "Air filter ",
      brand:"Apple",
      model:"single",
      decs: "You can use decorate your table Table suitable",
      phone:"021548936",
      email:"ergset@gmail.com",
    },
    {
      path:"./Vp3",
      cateImg: "./images/Music/3.jpg",
      title: "Fuel filter ",
      brand:"Apple",
      model:"single",
      decs: "You can use decorate your table Table suitable",
      phone:"021548936",
      email:"ergset@gmail.com",
    },
    {
      path:"./Vp4",
      cateImg: "./images/Music/4.jpg",
      title: "Oil filter ",
      brand:"Apple",
      model:"single",
      decs: "You can use decorate your table Table suitable",
      phone:"021548936",
      email:"ergset@gmail.com",
    },
  ]
  return (
    <>
    <h1 className='qwe3'>Violine</h1>
      <MuCategories/>
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