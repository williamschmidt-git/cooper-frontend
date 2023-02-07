import axios from 'axios';

import api from './api';

const listTasks = async (token) => {
  // console.log(api.backend_url);
  // console.log(user);
  const options = {
    method: 'GET',
    url: `${api.backend_url}task/`,
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios(options);
  // console.log(response);
  return response.data;
};

const updateTask = async (token, task) => {
  const options = {
    method: 'PATCH',
    url: `${api.backend_url}task/${task.id}`,
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    data: {
      ...task,
    },
  };

  const response = await axios(options);
  return response.data;
};

export { updateTask, listTasks };
