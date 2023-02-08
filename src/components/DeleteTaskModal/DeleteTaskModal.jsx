import React, { useContext } from 'react';
import Context from '../../context/Context';
import { deleteTask } from '../../requests/task';
import './index.css';

export default function DeleteTaskModal() {
  const {
    setShowDeleteTaskModal, idRef, toDoTasks, setToDoTasks,
  } = useContext(Context);

  const getcookie = () => {
    const token = document.cookie.split('=').pop();
    return token;
  };

  const handleClick = async () => {
    await deleteTask(getcookie(), idRef);
    const items = Array.from(toDoTasks);
    const [filteredItem] = items.filter((e) => e.id === Number(idRef));

    const [removedItem] = items.splice(items.indexOf(filteredItem), 1);
    const newTodoTasks = toDoTasks.filter((e) => e !== removedItem);
    setToDoTasks(newTodoTasks);

    setShowDeleteTaskModal(false);
  };

  return (
    <div className="delete-task-modal">
      <div className="delete-task-modal-content">
        <h3>
          Are you sure you want to delete this task?
        </h3>

        <div className="confirm-delete-btn-wrapper">
          <button
            type="button"
            onClick={() => handleClick()}
            className="delete-task-modal-button"
          >
            yes
          </button>

          <button
            type="button"
            onClick={() => {
              setShowDeleteTaskModal(false);
            }}
            className="delete-task-modal-button"
          >
            no
          </button>
        </div>
      </div>
    </div>
  );
}
