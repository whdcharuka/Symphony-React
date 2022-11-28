// import React from 'react'
// import '../pages/Login.css';
// import { useForm } from 'react-hook-form';
// import CardItem from '../CardItem';
// import { Link } from 'react-router-dom';

// export default function Form() {

//     const { register, handleSubmit, watch, formState: { errors } } = useForm()
//     const onSubmit = data => console.log(data);
    
//   return (
//     <div className='cards'>
//     <h6>HOBBY & SPORT<Link to='/All'><button className='btn1'>All</button></Link></h6>
//       <div className='cards__container'>
//         <div className='cards__wrapper'>
//           <ul className='cards__items'>
//             <CardItem
//               src='images/HobbySport/.jpg'
//               text=''
//               path='/Hs1'
//             />
//             <CardItem
//               src='images/HobbySport/.jpg'
//               text=''
//               path='/Hs2'
//             />
//             <CardItem
//               src='images/HobbySport/.jpg'
//               text=''
//               path='/Hs3'
//             />
//             <CardItem
//               src='images/HobbySport/.jpg'
//               text=''
//               path='/Hs4'
//             />
//             {/* <CardItem
//               src='images/HobbySport/.jpg'
//               text=''
//               path='/Hs5'
//             /> */}
//           </ul> 
//           <ul className='cards__items'>
//             <CardItem
//               src='images/HobbySport/.jpg'
//               text=''
//               path='/Hs6'
//             />
//             <CardItem
//               src='images/HobbySport/.jpg'
//               text=''
//               path='/Hs7'
//             />
//             <CardItem
//               src='images/HobbySport/.jpg'
//               text=''
//               path='/Hs8'
//             />
//             <CardItem
//               src='images/HobbySport/.jpg'
//               text=''
//               path='/Hs9'
//             />
//             {/* <CardItem
//               src='images/HobbySport/.jpg'
//               text=''
//               path='/Hs10'
//             /> */}
//           </ul>       
//           </div>
//         </div>
//       </div>
//   );
// }

import React from "react"
import "../pages/Wrapper.css"
import { Link } from "react-router-dom"

const Wrapper = () => {
  const data = [
    {
      path:"./Vp1",
      cateImg: "./images/HobbySport/1.jpg",
      title: "Horn ",
      brand:"Apple",
      model:"single",
      decs: "You can use decorate your table Table suitable",
      phone:"021548936",
      email:"ergset@gmail.com",
    },
    {
      path:"./Vp2",
      cateImg: "./images/HobbySport/2.jpg",
      title: "Air filter ",
      brand:"Apple",
      model:"single",
      decs: "You can use decorate your table Table suitable",
      phone:"021548936",
      email:"ergset@gmail.com",
    },
    {
      path:"./Vp3",
      cateImg: "./images/HobbySport/3.jpg",
      title: "Fuel filter ",
      brand:"Apple",
      model:"single",
      decs: "You can use decorate your table Table suitable",
      phone:"021548936",
      email:"ergset@gmail.com",
    },
    {
      path:"./Vp4",
      cateImg: "./images/HobbySport/4.jpg",
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
      <section className='wrapper wbackground'>
        <div className='wcontainer1 grid2'>
          {data.map((val, index) => {
            return (
              <div className='vpproduct' key={index}>
                <div>
                <img src={val.cateImg} alt='' />
                </div>
                <h6>{val.title}</h6>
                <p>{val.brand}</p>
                <p>{val.model}</p>
                <p>{val.decs}</p>
                <p>Whatsapp : {val.phone}</p>
                <p>{val.email}</p>
                <link rel = "canonical" href = "https://www.javatpoint.com/"  />    
                <Link to={val.phone}><button className='btn--medium'>CONTACT</button></Link>
              </div>
            ) 
          })}
        </div>
      </section> 
    </>
  )
}

export default Wrapper