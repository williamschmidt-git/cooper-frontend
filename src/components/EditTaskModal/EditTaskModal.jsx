import React, { useContext, useState } from 'react';
import Context from '../../context/Context';
import { updateTask } from '../../requests/task';
import './index.css';

export default function EditTaskModal() {
  const { setShowEditTaskModal, idRef } = useContext(Context);
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setTask(value);
  };

  const getcookie = () => {
    const token = document.cookie.split('=').pop();
    return token;
  };

  const handleClick = async () => {
    const obj = {
      id: idRef,
      taskToDo: task,
    };
    await updateTask(getcookie(), obj);

    setShowEditTaskModal(false);
  };

  return (
    <div className="edit-task-modal">
      <div className="edit-task-modal-content">
        <div className="edit-task-modal-header">
          <h4>Edit Task</h4>
        </div>

        <div className="edit-task-modal-body">
          <label htmlFor="task">
            Task:
            <input type="text" name="task" onChange={handleChange} value={task} />
          </label>
          <button type="button" className="edit-task-modal-edit-button" onClick={() => handleClick()}>
            edit
          </button>
        </div>

        <button
          type="button"
          onClick={() => setShowEditTaskModal(false)}
          className="create-task-modal-close-button"
        >
          close
        </button>
      </div>
    </div>
  );
}
