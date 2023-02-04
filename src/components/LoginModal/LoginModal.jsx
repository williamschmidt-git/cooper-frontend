import React from 'react';

export default function LoginModal() {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">
            Sign in
            <p>to access your list</p>
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

          <button type="button">Sign in</button>
        </div>
      </div>
    </div>
  );
}
