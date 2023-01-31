import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Provider from './context/providers/Provider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>
    <App />
  </Provider>,
);
