import React from 'react';
import '../../App.css';
import Categories from '../pages/Categories';
import AnItem from './AnItem';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <section>
        <div className='container d_flex'>
          <Categories />
            <div className='qwe'>
               <AnItem />
            </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Home;
