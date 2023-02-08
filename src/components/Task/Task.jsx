/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { Draggable } from 'react-beautiful-dnd';
import Context from '../../context/Context';
import { deleteTask } from '../../requests/task';

export default function Task({
  text, id, key, index, droppableId,
}) {
  const {
    // showEditTaskModal,
    setShowEditTaskModal,
    setIdRef,
  } = useContext(Context);
  // console.log(id);

  const getcookie = () => {
    const token = document.cookie.split('=').pop();
    return token;
  };

  const handleDelete = (taskId) => {
    deleteTask(getcookie(), taskId);
  };

  const handleUpdate = (taskId) => {
    setIdRef(taskId);
    setShowEditTaskModal(true);
  };

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
            <div key={key} className="input-wrapper">
              <input type="radio" id={id} name="task" />
              <label
                htmlFor={id}
                className="board-todo-task-text"
              >
                {text}
              </label>
              <div className="button-wrapper">
                <input
                  className="update-btn"
                  type="image"
                  alt="pen symbol"
                  src="/assets/svgs/edit-svgrepo-com.svg"
                  onClick={() => {
                    handleUpdate(id);
                    setShowEditTaskModal(true);
                  }}
                />
                <input
                  className="delete-btn"
                  type="image"
                  src="/assets/svgs/trash-svgrepo-com.svg"
                  alt="minus symbol"
                  onClick={() => handleDelete(id)}
                />
              </div>
            </div>
          ) : (
            <div key={key}>
              <input type="radio" id={id} checked />
              <label
                htmlFor={id}
                className="board-todo-task-text"
              >
                {text}
              </label>

            </div>
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
  droppableId: PropTypes.string.isRequired,
};
