import React, { useContext } from 'react';
import Context from '../../context/Context';
import './index.css';

export default function Header() {
  const { setShowLoginModal, setShowRegisterModal } = useContext(Context);
  return (
    <header>
      <div className="topo">
        <div className="logo">
          <img src="/assets/svgs/Fill 1.svg" alt="less than symbol" className="logo-cooper" />
          <h1 className="logo-title">coopers</h1>
        </div>
        <div className="button-wrapper">
          <button
            type="button"
            className="login-button"
            onClick={() => setShowRegisterModal(true)}
          >
            Sign up
          </button>

          <button
            type="button"
            className="login-button"
            onClick={() => setShowLoginModal(true)}
          >
            Sign in
          </button>

        </div>

      </div>
    </header>
  );
}
