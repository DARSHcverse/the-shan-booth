import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../App.css';
// import boothvideo from '../images/boothvideo.mp4';

const QuickQuote = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    eventDate: '',
    eventLocation: '',
    packageDuration: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Custom validation: check if all fields are filled
    const { fullName, email, phoneNumber, eventDate, eventLocation, packageDuration, service, message } = formData;
    if (!fullName || !email || !phoneNumber || !eventDate || !eventLocation || !packageDuration || !service || !message) {
      setStatus('You have to complete all details.');
      return;
    }

    setStatus('Sending...');

    try {
      const response = await fetch('/.netlify/functions/sendQuote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('Thank you! Your quote request has been sent successfully.');
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
        {/* <video className="booth-video" autoPlay loop muted>
          <source src={boothvideo} type="video/mp4" />
        </video> */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="form-input"
              value={formData.fullName}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              className="form-input"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <input
              type="date"
              name="eventDate"
              placeholder="Date of Event"
              className="form-input"
              value={formData.eventDate}
              onChange={handleChange}
            />
            <input
              type="text"
              name="eventLocation"
              placeholder="Event Location"
              className="form-input"
              value={formData.eventLocation}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <select
              name="packageDuration"
              className="form-select"
              value={formData.packageDuration}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Package Duration
              </option>
              <option value="2hrs">2 hrs</option>
              <option value="3hrs">3 hrs</option>
              <option value="4hrs">4 hrs</option>
              <option value="5hrs">5 hrs</option>
              <option value="6hrs">6 hrs</option>
              <option value="7hrs+">7+ hrs</option>
            </select>
          </div>

          <div className="radio-group-container">
            <p className="radio-group-title">Select a Service:</p>
            <div className="radio-group">
              {['Open Booth', 'Glam Booth', 'Enclosed Booth'].map((serviceType) => (
                <div className="radio-option" key={serviceType}>
                  <input
                    type="radio"
                    name="service"
                    value={serviceType}
                    id={serviceType.toLowerCase().replace(' ', '')}
                    className="custom-radio"
                    checked={formData.service === serviceType}
                    onChange={handleChange}
                  />
                  <label htmlFor={serviceType.toLowerCase().replace(' ', '')}>
                    {serviceType}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <textarea
            name="message"
            placeholder="Your message..."
            className="form-textarea"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit" className="submit-button">
            Get Quote
          </button>
        </form>

        {status && <p className="form-status">{status}</p>}

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button
            onClick={() => navigate('/packages')}
            className="back-button"
          >
            Back to Packages
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickQuote;
