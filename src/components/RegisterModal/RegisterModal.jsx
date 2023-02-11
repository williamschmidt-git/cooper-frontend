import React, { useContext, useState } from 'react';
import Context from '../../context/Context';
import createUser from '../../requests/user';
import './index.css';

export default function RegisterModal() {
  const {
    setShowRegisterModal, setRerender, rerender, setToDoTasks, setDoneBoard,
  } = useContext(Context);
  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
  });

  const [apiMessage, setApiMessage] = useState('');
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
    const data = await createUser(user);

    if (data.message) {
      setIsReady(true);
      setApiMessage(`${data.message} Logging in...`);
    }

    if (data.token) {
      createTokenCookie(data.token);
      setRerender(!rerender);
      setToDoTasks([]);
      setDoneBoard([]);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" type="button" onClick={() => setShowRegisterModal(false)}>close</button>

        <div className="modal-header">
          <img src="assets/imgs/image 1.png" alt="woman" className="modal-img" />
          <h4 className="modal-title">
            Sign up
            <p className="modal-subhead">to access your list</p>
          </h4>
        </div>

        <div className="modal-body">
          <label htmlFor="email">
            Email:
            <input type="text" onChange={handleChange} value={user.email} name="email" />
          </label>

          <label htmlFor="user">
            User:
            <input type="text" onChange={handleChange} value={user.username} name="username" />
          </label>

          <label htmlFor="password">
            Password:
            <input type="password" onChange={handleChange} value={user.password} name="password" />
          </label>

        </div>
        <button
          type="button"
          className="signin-button"
          onClick={() => {
            sendRequest();
          }}
        >
          Sign in

        </button>
      </div>
      {isReady
        && (
          <>
            {alert(apiMessage)}
            {setShowRegisterModal(false)}
          </>
        )}
    </div>
  );
}
