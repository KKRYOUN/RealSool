import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SoolCategory from './SoolCategory';
import SoolList from './SoolList';
import SoolView from './SoolView';

const Sool = () => {

  return (
    <>
    <Routes>
      <Route path="/" element={<SoolCategory />} />
      <Route path="/soolList" element={<SoolList />} />
      <Route path="/soolView" element={<SoolView />} />
    </Routes>
    </>
  )
}

export default Sool;