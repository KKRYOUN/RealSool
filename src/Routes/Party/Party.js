import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PartyView from './PartyView';
import PartyList from './PartyList';
import PartyListWrite from '../../Components/PartyComponets/PartyListWrite';

const Party = () => {

    return (
      <>
      <Routes>
        <Route path="/" element={<PartyList />} />
        <Route path="/PartyListWrite" element={<PartyListWrite />} />
        <Route path="/PartyView/:partyId" element={<PartyView />} />
      </Routes>
      </>
    )
  }
  
  export default Party;