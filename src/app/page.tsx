import React from 'react'
import Header from './components/header';
import Hero from './components/hero';
import BrowseRange from './components/Browse The Range';
import OurProducts from './components/OurProducts';
import RoomInspiration from './components/RoomInspiration';
import FuniroFurniture from './components/FuniroFurniture';
import Footer from './components/Footer';



export default function Home() {
  return (
    <div>
      
      <Header />
      <Hero />
      <BrowseRange />
      <OurProducts />
      <RoomInspiration />
      <FuniroFurniture />
      <Footer />
    </div>
  );
}