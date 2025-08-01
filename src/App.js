import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import PhotoboothsPage from './components/PhotoboothsPage';
import EventsPage from './components/EventsPage';
import PackagesPage from './components/PackagesPage';
import './App.css'; 

const App = () => {
    const [currentPage, setCurrentPage] = useState('homepage');

    const renderPage = () => {
        switch (currentPage) {
            case 'homepage':
                return <HomePage setCurrentPage={setCurrentPage} />;
            case 'photobooths':
                return <PhotoboothsPage />;
            case 'events':
                return <EventsPage />;
            case 'packages':
                return <PackagesPage />;
            default:
                return <HomePage setCurrentPage={setCurrentPage} />;
        }
    };

    return (
        <div className="main-layout">
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            {renderPage()}
            <Footer />
        </div>
    );
};

export default App;