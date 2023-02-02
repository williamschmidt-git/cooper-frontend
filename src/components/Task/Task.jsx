/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { Draggable } from 'react-beautiful-dnd';

export default function Task({
  text, id, key, index, droppableId,
}) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          className={snapshot.isDragging ? 'board-todo-task-dragging' : 'board-todo-task'}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          {droppableId === 'tasks' ? (
            <>
              <input type="radio" id={id} />
              <label
                htmlFor={id}
                className="board-todo-task-text"
              >
                {text}
              </label>

            </>
          ) : (
            <>
              <input type="radio" id={id} checked />
              <label
                htmlFor={id}
                className="board-todo-task-text"
              >
                {text}
              </label>

            </>
          )}
        </div>
      )}

    </Draggable>

  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  key: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
