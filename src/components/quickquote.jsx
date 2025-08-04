import React from "react";
import '../App.css';

const QuickQuote = () => {
    return (
        <div className="quick-quote-container">
            <div className="quick-quote-card">
                <h2 className="page-heading">Quick Quote</h2>
                <div className="form-group">
                    <input type="text" placeholder="Full Name" className="form-input" />
                    <input type="email" placeholder="Email" className="form-input" />
                    <input type="text" placeholder="Phone Number" className="form-input" />
                    <input type="date" placeholder="Date of Event" className="form-input" />
                    <input type="text" placeholder="Event Location" className="form-input" />
                </div>
                <div className="form-group">
                    <select className="form-select">
                        <option value="" disabled selected>Select Package Duration</option>
                        <option value="2hrs">2 hrs</option>
                        <option value="3hrs">3 hrs</option>
                        <option value="4hrs">4 hrs</option>
                        <option value="5hrs">5 hrs</option>
                        <option value="6hrs">6 hrs</option>
                        <option value="7hrs+">7+</option>
                    </select>
                </div>
                <div className="radio-group-container">
                    <p className="radio-group-title">Select a Service:</p>
                    <div className="radio-group">
                        <div className="radio-option">
                            <input type="radio" name="service" value="Open Booth" id="openbooth" className="custom-radio" />
                            <label htmlFor="openbooth">Open Booth</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" name="service" value="Glam Booth" id="glambooth" className="custom-radio" />
                            <label htmlFor="glambooth">Glam Booth</label>
                        </div>
                        <div className="radio-option">
                            <input type="radio" name="service" value="Enclosed Booth" id="enclosedbooth" className="custom-radio" />
                            <label htmlFor="enclosedbooth">Enclosed Booth</label>
                        </div>
                    </div>
                </div>
                <textarea placeholder="Your message..." className="form-textarea"></textarea>
                <button className="submit-button">Get Quote</button>
            </div>
        </div>
    );
};

export default QuickQuote;
