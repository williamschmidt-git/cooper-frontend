import React, { useContext } from 'react';
import Context from '../../context/Context';
import './index.css';

export default function LoginModal() {
  const { setShowModal } = useContext(Context);

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" type="button" onClick={() => setShowModal(false)}>close</button>

        <div className="modal-header">
          <img src="./imgs/image 1.png" alt="woman" className="modal-img" />
          <h4 className="modal-title">
            Sign in
            <p className="modal-subhead">to access your list</p>
          </h4>
        </div>

        <div className="modal-body">
          <label htmlFor="user">
            User:
            <input type="text" />
          </label>

          <label htmlFor="password">
            Password:
            <input type="password" />
          </label>

        </div>
        <button type="button" className="signin-button">Sign in</button>
      </div>
    </div>
  );
}
