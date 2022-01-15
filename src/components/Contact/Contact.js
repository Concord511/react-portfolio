import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact__formContainer">
            <h1 className="contact__h1">Contact:</h1>
            <form>
                <div className="contact__inputContainer">
                    <label htmlFor="contactName">Name:</label>
                    <input name="contactName" type="text" />
                </div>
                <div className="contact__inputContainer">
                    <label htmlFor="contactEmail">Email:</label>
                    <input name="contactEmail" type="text" />
                </div>
                <div className="contact__inputContainer">
                    <label htmlFor="contactMessage">Message:</label>
                    <textarea name="contactMessage" type="text" rows="5" col="150" />
                </div>
            </form>
        </div>
    )
}

export default Contact;