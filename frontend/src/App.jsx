import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { NotFound } from './pages/NotFound/NotFound';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home/Home';

function App() {
  const location = useLocation();

  const hideHeaderOn = ['/404'];

  const hideHeader = hideHeaderOn.includes(location.pathname);

  return (
    <>
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>

      {!hideHeader && <Footer />}
    </>
  );
}

export default App;
