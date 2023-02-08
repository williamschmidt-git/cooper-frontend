import React from 'react';
import './index.css';

export default function Title() {
  const handleClickScroll = () => {
    const [element] = document.getElementsByClassName('todo-box');

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="title-container">
      <div className="Title">
        <h1 className="title-first-text">
          Organize
          <h1 className="title-second-text">
            your daily jobs
          </h1>
        </h1>
        <p className="title-third-text">The only way to get things done</p>
        <button type="button" className="title-button" onClick={handleClickScroll}>Go to To-do list</button>
      </div>
    </div>
  );
}
