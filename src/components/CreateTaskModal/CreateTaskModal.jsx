import React, { useContext, useState } from 'react';
import Context from '../../context/Context';
import { createTask } from '../../requests/task';
import './index.css';

export default function CreateTaskModal() {
  const { setShowCreateTaskModal, setToDoTasks, toDoTasks } = useContext(Context);
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
    const response = await createTask(getcookie(), task);
    setToDoTasks([...toDoTasks, response.task]);
    setShowCreateTaskModal(false);
  };

  return (
    <div className="create-task-modal">
      <div className="create-task-modal-content">
        <div className="create-task-modal-header">
          <h4>Add Task</h4>
        </div>

        <div className="create-task-modal-body">
          <label htmlFor="task">
            Task:
            <input type="text" name="task" onChange={handleChange} value={task} />
          </label>
          <button type="button" className="create-task-modal-create-button" onClick={() => handleClick()}>
            create
          </button>
        </div>

        <button
          type="button"
          onClick={() => setShowCreateTaskModal(false)}
          className="create-task-modal-close-button"
        >
          close
        </button>
      </div>
    </div>
  );
}
