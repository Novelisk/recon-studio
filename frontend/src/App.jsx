import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { NotFound } from './pages/NotFound/NotFound';

// Añadir element al Route después del path

function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* <Route path="/" /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
