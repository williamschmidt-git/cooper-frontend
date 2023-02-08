import React, { useContext, useState } from 'react';
import Context from '../../context/Context';
import login from '../../requests/login';
import './index.css';

export default function LoginModal() {
  const { setShowLoginModal } = useContext(Context);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [isReady, setIsReady] = useState(false);

  const createTokenCookie = (token) => {
    const now = new Date();
    now.setDate(now.getDate() + 7);

    document.cookie = `token=${token}; expires=${now.toUTCString()}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, [name]: value,
    });
  };

  const sendRequest = async () => {
    const data = await login(user);

    if (data.token) {
      createTokenCookie(data.token);
      setIsReady(true);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" type="button" onClick={() => setShowLoginModal(false)}>close</button>

        <div className="modal-header">
          <img src="assets/imgs/image 1.png" alt="woman" className="modal-img" />
          <h4 className="modal-title">
            Sign in
            <p className="modal-subhead">to access your list</p>
          </h4>
        </div>

        <div className="modal-body">
          <label htmlFor="user">
            E-mail:
            <input type="text" name="email" onChange={handleChange} value={user.email} />
          </label>

          <label htmlFor="password">
            Password:
            <input type="password" name="password" onChange={handleChange} value={user.password} />
          </label>

        </div>
        <button type="button" className="signin-button" onClick={() => sendRequest()}>Sign in</button>
      </div>
      {isReady
        && (
        <>
          {alert('Logged in')}
          {setShowLoginModal(false)}
        </>
        )}
    </div>
  );
}
