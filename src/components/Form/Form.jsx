import React from 'react';
import './index.css';

export default function Form() {
  return (
    <form className="form-contact">
      <label htmlFor="name">
        Your name
        <input type="text" placeholder="type your name here" id="name" />
      </label>
      <div className="middle-inputs">
        <label htmlFor="email">
          E-mail*
          <input type="text" placeholder="example@example.com" id="email" />
        </label>

        <label htmlFor="telephone">
          Telephone*
          <input type="text" placeholder="( ) _____-____" id="telephone" />
        </label>
      </div>

      <label htmlFor="message">
        Message*
        <textarea id="message" placeholder="type what you want to say to us" className="message-input" />
      </label>

      <button className="send-message-button" type="submit">SEND NOW</button>
    </form>
  );
}
