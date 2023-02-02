import React from 'react';
import ReactDOM from 'react-dom/client';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import { DragDropContext } from 'react-beautiful-dnd';
import App from './App';
import Provider from './context/providers/Provider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>

    <App />

  </Provider>,
);
