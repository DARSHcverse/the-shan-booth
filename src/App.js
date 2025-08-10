import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import EventsPage from './components/EventsPage';
import PackagesPage from './components/PackagesPage';
import PhotoboothsPage from './components/PhotoboothsPage';
import QuickQuote from './components/quickquote';
import Header from './components/Header';
import Footer from './components/Footer';
import BackdropPage from './components/backdrop';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/photobooths" element={<PhotoboothsPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/quickquote" element={<QuickQuote />} />
        <Route path="/backdrop" element={<BackdropPage />} />
        {/* Optionally, add a catch-all 404 page */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
