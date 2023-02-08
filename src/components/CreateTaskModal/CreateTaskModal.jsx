import React, { useContext, useState } from 'react';
import Context from '../../context/Context';
import './index.css';

export default function CreateTaskModal() {
  const { setShowCreateTaskModal } = useContext(Context);
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setTask(value);
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
          <button type="button" className="create-task-modal-create-button">
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
