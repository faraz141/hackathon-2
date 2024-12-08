'use client';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/Feautreprod';
import LatestProducts from './components/Latestproducts';
import ShopexOffer from './components/Shopexoffer';
import UniqueFeatures from './components/UniqueFeautures';
import TrendingProducts from './components/TrendingProducts';
import Discount from './components/Discount';
import TopCateg from './components/TopCateg';
import Offers from './components/Offers';
import Blog from './components/Blogs';
// import Footer from './components/Footer';
import Header from './components/header';

const Home: React.FC = () => {
  return (
    <div>
      <header>
        <Header />
        <Navbar />
      </header>

      <main>
        <Hero />
        <FeaturedProducts />
        <LatestProducts />
        <ShopexOffer />
        <UniqueFeatures />
        <TrendingProducts />
        <Discount />
        <TopCateg />
        <Offers />
        <Blog />
      </main>
    </div>
  );
};

export default Home;
