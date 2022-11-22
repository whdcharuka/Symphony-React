import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import Fb2View from './Fb2View';
import Des2 from './Des2';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <Fb2View />
            </div>
            <div className='description'>
               <Des2/>
            </div>
        </div>
      </section>
    </>
  );
}

export default Home;