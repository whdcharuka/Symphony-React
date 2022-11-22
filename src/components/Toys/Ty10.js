import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import Ty10View from './Ty10View';
import Des10 from './Des10';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='photo'>
               <Ty10View />
            </div>
            <div className='description'>
               <Des10/>
            </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Home;