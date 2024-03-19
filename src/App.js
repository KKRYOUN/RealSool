import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About from './Routes/About/About';
import Brewery from './Routes/Brewery/Brewery';
import Mypage from './Routes/Mypage/Mypage';
import PartyList from './Routes/Party/PartyList';
import Sool from './Routes/Sool/Sool';

function App() {
  return (
    <>
      <Routes>
        <Header />
        <About />
        <Brewery />
        <Mypage />
        <PartyList />
        <Sool />
        <Footer />
      </Routes>
    </>
  );
}

export default App;
