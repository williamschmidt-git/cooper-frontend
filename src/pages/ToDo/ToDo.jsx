/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './index.css';

import ToDoTitle from '../../components/ToDoTitle/ToDoTitle';
import DragAndDrop from '../../components/DragAndDrop/DragAndDrop';

export default function ToDo() {
  return (
    <div className="todo-wrapper">
      <ToDoTitle />
      <DragAndDrop />
    </div>
  );
}
