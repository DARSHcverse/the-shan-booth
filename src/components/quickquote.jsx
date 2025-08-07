import React, { useState } from "react";
import '../App.css';

const QuickQuote = () => {
    // State to hold form data
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        eventDate: '',
        eventLocation: '',
        packageDuration: '',
        service: '', // Added for radio button selection
        message: ''
    });

    // State for user feedback
    const [status, setStatus] = useState('');

    // Handle input changes for all fields, including the dropdown and radio buttons
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        
        try {
            const response = await fetch('/send-quote', { // This endpoint matches your server.js
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('Thank you! Your quote request has been sent successfully.');
                // Clear form after successful submission
                setFormData({
                    fullName: '',
                    email: '',
                    phoneNumber: '',
                    eventDate: '',
                    eventLocation: '',
                    packageDuration: '',
                    service: '',
                    message: ''
                }); 
            } else {
                setStatus('Failed to send your request. Please try again later.');
            }
        } catch (error) {
            console.error('Error sending form data:', error);
            setStatus('An error occurred. Please try again.');
        }
    };

    return (
        <div className="quick-quote-container">
            <div className="quick-quote-card">
                <h2 className="page-heading">Quick Quote</h2>
                <form onSubmit={handleSubmit}> {/* Added onSubmit handler */}
                    <div className="form-group">
                        <input
                            type="text"
                            name="fullName" // Added name attribute
                            placeholder="Full Name"
                            className="form-input"
                            value={formData.fullName} // Controlled component
                            onChange={handleChange} // Event handler
                            required
                        />
                        <input
                            type="email"
                            name="email" // Added name attribute
                            placeholder="Email"
                            className="form-input"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="phoneNumber" // Added name attribute
                            placeholder="Phone Number"
                            className="form-input"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="date"
                            name="eventDate" // Added name attribute
                            placeholder="Date of Event"
                            className="form-input"
                            value={formData.eventDate}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="eventLocation" // Added name attribute
                            placeholder="Event Location"
                            className="form-input"
                            value={formData.eventLocation}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <select
                            name="packageDuration" // Added name attribute
                            className="form-select"
                            value={formData.packageDuration}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select Package Duration</option>
                            <option value="2hrs">2 hrs</option>
                            <option value="3hrs">3 hrs</option>
                            <option value="4hrs">4 hrs</option>
                            <option value="5hrs">5 hrs</option>
                            <option value="6hrs">6 hrs</option>
                            <option value="7hrs+">7+</option>
                        </select>
                    </div>
                    <div className="radio-group-container"> {/* This container was previously hidden by CSS */}
                        <p className="radio-group-title">Select a Service:</p>
                        <div className="radio-group">
                            <div className="radio-option">
                                <input
                                    type="radio"
                                    name="service" // Added name attribute
                                    value="Open Booth"
                                    id="openbooth"
                                    className="custom-radio"
                                    onChange={handleChange}
                                    checked={formData.service === 'Open Booth'} // Controlled radio button
                                    required
                                />
                                <label htmlFor="openbooth">Open Booth</label>
                            </div>
                            <div className="radio-option">
                                <input
                                    type="radio"
                                    name="service" // Added name attribute
                                    value="Glam Booth"
                                    id="glambooth"
                                    className="custom-radio"
                                    onChange={handleChange}
                                    checked={formData.service === 'Glam Booth'}
                                />
                                <label htmlFor="glambooth">Glam Booth</label>
                            </div>
                            <div className="radio-option">
                                <input
                                    type="radio"
                                    name="service" // Added name attribute
                                    value="Enclosed Booth"
                                    id="enclosedbooth"
                                    className="custom-radio"
                                    onChange={handleChange}
                                    checked={formData.service === 'Enclosed Booth'}
                                />
                                <label htmlFor="enclosedbooth">Enclosed Booth</label>
                            </div>
                        </div>
                    </div>
                    <textarea
                        name="message" // Added name attribute
                        placeholder="Your message..."
                        className="form-textarea"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit" className="submit-button">Get Quote</button>
                </form>
                {status && <p className="form-status">{status}</p>} {/* Display status messages */}
            </div>
        </div>
    );
};

export default QuickQuote;
