import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import An7View from './An7View';
import Des7 from './Des7';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <An7View />
            </div>
            <div className='description'>
               <Des7/>
            </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Home;