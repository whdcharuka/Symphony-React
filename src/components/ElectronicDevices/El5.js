import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import El5View from './El5View';
import Des5 from './Des5';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <El5View />
            </div>
            <div className='description'>
               <Des5/>
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;