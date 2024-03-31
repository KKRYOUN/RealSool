import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PartyView from './PartyView'
import PartyList from './PartyList'

const Party = () => {

    return (
      <>
      <Routes>
        <Route path="/" element={<PartyList />} />
        <Route path="/PartyView/:partyId" element={<PartyView />} />
      </Routes>
      </>
    )
  }
  
  export default Party;