import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Services } from './pages/Services/Services';
import { Booking } from './pages/Booking/Booking';
import { NotFound } from './pages/NotFound/NotFound';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

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

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/booking" element={<Booking />} />

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>

      {!hideHeader && <Footer />}
    </>
  );
}

export default App;
