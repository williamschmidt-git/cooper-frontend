import React from 'react';
import ReactDOM from 'react-dom/client';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import App from './App';
import Provider from './context/providers/Provider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  </Provider>,
);
