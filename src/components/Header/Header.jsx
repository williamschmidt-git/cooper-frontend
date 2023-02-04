import React, { useContext } from 'react';
import Context from '../../context/Context';
import './index.css';

export default function Header() {
  const { setShowModal } = useContext(Context);
  return (
    <header>
      <div className="topo">
        <div className="logo">
          <img src="/assets/svgs/Fill 1.svg" alt="less than symbol" className="logo-cooper" />
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
  );
}
