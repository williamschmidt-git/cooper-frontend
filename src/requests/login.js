import axios from 'axios';

import api from './api';

const login = async (user) => {
  // console.log(api.backend_url);
  // console.log(user);
  const options = {
    method: 'POST',
    url: `${api.backend_url}login`,
    headers: {
      'content-type': 'application/json',
    },
    data: {
      email: user.email,
      password: user.password,
    },
  };

  const response = await axios(options);
  // console.log(response);
  return response.data;
};

export default login;
