import React from 'react';
import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import HomePage from './components/HomePage';
import EventsPage from './components/EventsPage';
import PackagesPage from './components/PackagesPage';
import PhotoboothsPage from './components/PhotoboothsPage';
import QuickQuote from './components/quickquote';
import Header from './components/Header';
import Footer from './components/Footer';
import BackdropPage from './components/backdrop';
import TermsPage from './components/termspage';
import PrivacyPage from './components/privacy';
import PayPage from './components/PayPage';
import BookingPage from './components/Bookingpage';
import ChristmasLanding from "./components/ChristmasLanding";
import GraduationLanding from './components/GraduationLanding';
import PhotoboothLanding from './components/PhotoboothLanding';
import CorporateEventsLanding from './components/CorporateEventsLanding';
import WeddingLanding from './components/WeddingLanding';
import BirthdayLanding from './components/BirthdayLanding';
import PBSeoPage from './components/PBseopage';
import HalloweenLanding from './components/HalloweenLanding';
import ThankYou from './components/ThankYou';
import BlogList from './components/Blog/BlogList';
import BlogPost from './components/Blog/BlogPost';
import OpenBoothPage from './components/OpenBoothPage';
import GlamBoothPage from './components/GlamBoothPage';
import EnclosedBoothPage from './components/EnclosedBoothPage';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide the button on the booking page
  const showBookNow = location.pathname !== '/booking';

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
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/pay" element={<PayPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/christmas" element={<ChristmasLanding />} />
        <Route path="/graduation" element={<GraduationLanding />} />
        <Route path="/photoboothhiremelbourne" element={<PhotoboothLanding />} />
        <Route path="/corporate-events" element={<CorporateEventsLanding />} />
        <Route path="/weddings" element={<WeddingLanding />} />
        <Route path="/birthday" element={<BirthdayLanding />} />
        <Route path="/pbseopage" element={<PBSeoPage />} />
        <Route path="/halloween" element={<HalloweenLanding />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/open-booth" element={<OpenBoothPage />} />
        <Route path="/glam-booth" element={<GlamBoothPage />} />
        <Route path="/enclosed-booth" element={<EnclosedBoothPage />} />
      </Routes>

      {/* Global Floating Book Now Button */}
      {showBookNow && (
        <button
          className="book-now-floating"
          onClick={() => navigate('/booking')}
        >
          Book Now
        </button>
      )}

      <Footer />
    </div>
  );
}

export default App;
