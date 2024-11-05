// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProviderList from './pages/ProviderList';
import APIDetails from './pages/APIDetails';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ProviderList />} />
      <Route path="/:providerName/" element={<APIDetails />} />
    </Routes>
  );
};

export default App;
