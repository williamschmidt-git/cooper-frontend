import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default function Task({ text, id, key }) {
  // const [{ isDragging }, drag] = useDrag(() => ({
  //   type: 'div',
  //   item: { id },
  //   collect: (monitor) => ({
  //     isDragging: !!monitor.isDragging(),
  //   }),
  // }));

  return (
  // <p
  //   ref={drag}
  //   style={{ border: isDragging ? '5px solid red' : '0px' }}
  //   className="board-todo-task"
  // >
  //   {text}
  // </p>

    <div className="board-todo-task">
      <input type="radio" id={id} />
      <label
        htmlFor={id}
        className="board-todo-task-text"
      >
        {text}
      </label>
    </div>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  key: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
