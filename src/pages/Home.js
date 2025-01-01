import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <Partners />
      <Testimonials />
    </div>
  );
};

export default Home; 