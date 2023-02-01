import React from 'react';
import { useDrag } from 'react-dnd';
import './index.css';

export default function Task({ text, id, key }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'div',
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <p
      ref={drag}
      style={{ border: isDragging ? '5px solid red' : '0px' }}
      className="board-todo-task"
    >
      {text}
    </p>
  );
}
