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
    <div className="Title">
      <div>
        <p className="title-first-text">Organize</p>
        <p className="title-second-text">your daily jobs</p>
      </div>

      <p className="title-third-text">The only way to get things done</p>

      <button type="button" className="title-button" onClick={handleClickScroll}>Go to To-do list</button>
    </div>
  );
}
