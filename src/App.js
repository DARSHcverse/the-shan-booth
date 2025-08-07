import React, { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import EventsPage from './components/EventsPage';
import PackagesPage from './components/PackagesPage';
import PhotoboothsPage from './components/PhotoboothsPage';
import QuickQuote from './components/quickquote';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage setCurrentPage={setCurrentPage} />;
            case 'events':
                return <EventsPage setCurrentPage={setCurrentPage} />;
            case 'photobooths':
                return <PhotoboothsPage setCurrentPage={setCurrentPage} />;
            case 'packages':
                return <PackagesPage setCurrentPage={setCurrentPage} />;
            case 'quickquote':
                return <QuickQuote setCurrentPage={setCurrentPage} />;
            default:
                return <HomePage setCurrentPage={setCurrentPage} />;
        }
    };

    return (
        <div>
            <Header setCurrentPage={setCurrentPage} />
            {renderPage()}
            <Footer />
        </div>
    );
}

export default App;
