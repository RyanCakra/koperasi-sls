import React from 'react';
import Header from '../components/organism/Header';
import Navbar from '../components/organism/Navbar';
import Button from '../components/atoms/Button';
import Section1 from '../components/organism/section1';
import Section2 from '../components/organism/section2';
import Footer from '../components/organism/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-slswhite text-sky-300">
      <Navbar />
      <Header />
      <main className="bg-gray-100 w-full ">
        <Section1 />
        {/* <Section2 /> */}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
