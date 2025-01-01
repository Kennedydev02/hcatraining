import React from 'react';
import Layout from '../src/components/layout/Layout';
import HCAPrep from '../components/HCAPrep';
import Services from '../components/Services';

const Home = () => {
  return (
    <Layout>
      <HCAPrep />
      <Services />
    </Layout>
  );
};

export default Home; 