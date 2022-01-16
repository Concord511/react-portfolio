import React, { useState } from 'react';
import './Contact.css';
import { capitalizeFirstLetter, validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
        console.log('Handle Form', formState);
        setErrorMessage('Your information has been submitted.');
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        let fieldName = capitalizeFirstLetter(e.target.name);
        setErrorMessage(`${fieldName} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

    return (
        <section className="contact__formContainer">
            <h2 className="contact__h1">Contact:</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="contact__inputContainer">
                    <label htmlFor="name">Name:</label>
                    <input name="name" type="text" defaultValue={name} onBlur={handleChange}/>
                </div>
                <div className="contact__inputContainer">
                    <label htmlFor="email">Email:</label>
                    <input name="email" type="email" defaultValue={email} onBlur={handleChange}/>
                </div>
                <div className="contact__inputContainer">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                    <div>
                        <p className="contact__errorText">{errorMessage}</p>
                    </div>
                )}
                <button className="contact__submitButton" data-testid="button" type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Contact;