import axios from 'axios';

import api from './api';

const createUser = async (user) => {
  const options = {
    method: 'POST',
    url: `${api.backend_url}user`,
    headers: {
      'content-type': 'application/json',
    },
    data: {
      username: user.username,
      password: user.password,
      email: user.email,
    },
  };

  const response = await axios(options);
  console.log(response);
  return response.data;
};

export default createUser;
