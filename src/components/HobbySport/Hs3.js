import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import Hs3View from './Hs3View';
import Des3 from './Des3';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <Hs3View />
            </div>
            <div className='description'>
               <Des3/>
            </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Home;