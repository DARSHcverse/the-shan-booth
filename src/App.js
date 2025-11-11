import React, { Suspense, lazy } from 'react';
import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const HomePage = lazy(() => import('./components/HomePage'));
const EventsPage = lazy(() => import('./components/EventsPage'));
const PackagesPage = lazy(() => import('./components/PackagesPage'));
const PhotoboothsPage = lazy(() => import('./components/PhotoboothsPage'));
const QuickQuote = lazy(() => import('./components/quickquote'));
const BackdropPage = lazy(() => import('./components/backdrop'));
const TermsPage = lazy(() => import('./components/termspage'));
const PrivacyPage = lazy(() => import('./components/privacy'));
const PayPage = lazy(() => import('./components/PayPage'));
const BookingPage = lazy(() => import('./components/Bookingpage'));
const ChristmasLanding = lazy(() => import("./components/ChristmasLanding"));
const GraduationLanding = lazy(() => import('./components/GraduationLanding'));
const PhotoboothLanding = lazy(() => import('./components/PhotoboothLanding'));
const CorporateEventsLanding = lazy(() => import('./components/CorporateEventsLanding'));
const WeddingLanding = lazy(() => import('./components/WeddingLanding'));
const BirthdayLanding = lazy(() => import('./components/BirthdayLanding'));
const PBSeoPage = lazy(() => import('./components/PBseopage'));
const HalloweenLanding = lazy(() => import('./components/HalloweenLanding'));
const ThankYou = lazy(() => import('./components/ThankYou'));
const BlogList = lazy(() => import('./components/Blog/BlogList'));
const BlogPost = lazy(() => import('./components/Blog/BlogPost'));
const OpenBoothPage = lazy(() => import('./components/OpenBoothPage'));
const GlamBoothPage = lazy(() => import('./components/GlamBoothPage'));
const EnclosedBoothPage = lazy(() => import('./components/EnclosedBoothPage'));

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide the button on the booking page
  const showBookNow = location.pathname !== '/booking';

  return (
    <div>
      <Header />

      <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading…</div>}>
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
      </Suspense>

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
