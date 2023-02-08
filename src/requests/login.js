import axios from 'axios';

import api from './api';

const login = async (user) => {
  const options = {
    method: 'POST',
    url: `${api.backend_url}login`,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    data: {
      email: user.email,
      password: user.password,
    },
  };

  const response = await axios(options);
  return response.data;
};

export default login;
