// src/pages/user/Home.tsx
import React from 'react';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import Banner from '../../components/Banner/Banner';
import Subscribe from '../../components/Subscribe/Subscribe';
import Banner2 from '../../components/Banner/Banner2';
import Footer from '../../components/common/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Banner />
      <Subscribe />
      <Banner2 />
      <Footer />
    </div>
  );
};

export default Home;
