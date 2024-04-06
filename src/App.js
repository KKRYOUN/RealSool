import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Routes/Home/Home";
import About from "./Routes/About/About";
import Brewery from "./Routes/Brewery/Brewery";
import Mypage from "./Routes/Mypage/Mypage";
import Party from "./Routes/Party/Party";
import Sool from "./Routes/Sool/Sool";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/brewery" element={<Brewery />} />
        <Route path="/mypage/*" element={<Mypage />} />
        <Route path="/party/*" element={<Party />} />
        <Route path="/sool" element={<Sool />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
