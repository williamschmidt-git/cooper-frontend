import React, { useContext } from 'react';
import './index.css';
import LoginModal from '../../components/LoginModal/LoginModal';
import Context from '../../context/Context';

export default function Main() {
  const { showModal, setShowModal } = useContext(Context);
  console.log(showModal);

  return (
    <>
      <header>
        <div className="topo">
          <div className="logo">
            <img src="./svgs/Fill 1.svg" alt="less than symbol" className="logo-cooper" />
            <h1 className="logo-title">coopers</h1>
          </div>
          <button
            type="button"
            className="login-button"
            onClick={() => setShowModal(true)}
          >
            entrar

          </button>
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

      <div className="slide-background">
        <img className="logo-background" src="./svgs/BG.svg" alt="background less than symbol" />
        <img className="pic-background" src="./imgs/foto.png" alt="a room with a desk and a tv screen above" />
      </div>

      <button type="button" className="scroll-down-button">
        <img src="./svgs/icon-scroll.svg" alt="arrow icon to scroll down" type />
      </button>
      {showModal ? (
        <LoginModal />
      ) : null}
    </>
  );
}
