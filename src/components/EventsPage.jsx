import React from 'react';
import '../App.css';

const EventsPage = () => (
    <main className="main-content section-padding">
        <div className="container">
            <h2 className="page-heading">Events We Cover</h2>
            <p className="events-intro">
                We are passionate about bringing joy and unforgettable memories to a wide variety of events. No matter the occasion, we have a photobooth solution to match.
            </p>
            <ul className="events-list">
                <li>Weddings</li>
                <li>Birthday Parties</li>
                <li>Corporate Events</li>
                <li>Holiday Parties</li>
                <li>School Dances and Proms</li>
                <li>Grand Openings</li>
                <li>Anniversaries</li>
                <li>Fundraisers and Galas</li>
            </ul>
        </div>
    </main>
);

export default EventsPage;