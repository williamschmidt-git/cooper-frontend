import React from 'react';
import './index.css';

export default function Main() {
  return (
    <>
      <header>
        <div className="topo">
          <div className="logo">
            <img src="./svgs/Fill 1.svg" alt="less than symbol" className="logo-cooper" />
            <h1 className="logo-title">coopers</h1>
          </div>
          <button type="button" className="login-button">entrar</button>
        </div>
      </header>

      <div className="Title">
        <div>
          <p className="title-first-text">Organize</p>
          <p className="title-second-text">your daily jobs</p>
        </div>

        <p className="title-third-text">The only way to get things done</p>
        <button type="button" className="title-button">Go to To-do list</button>
      </div>
    </>
  );
}
