import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import Fd7View from './Fd7View';
import Des7 from './Des7';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <Fd7View />
            </div>
            <div className='description'>
               <Des7/>
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;