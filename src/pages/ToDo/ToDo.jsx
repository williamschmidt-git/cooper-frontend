import React, { useState } from 'react';
import './index.css';
import Task from '../../components/Task/Task';

export default function ToDo() {
  const [todoTasks, setTodoTasks] = useState([
    // {
    //   id: 1,
    //   task: 'Develop the To-do list page',
    // },
    // {
    //   id: 2,
    //   task: 'Create the drag-and-drop function',
    // },
    // {
    //   id: 3,
    //   task: 'Add new tasks',
    // },
  ]);

  const [doneBoard, setDoneBoard] = useState([]);

  return (
    <>
      <div className="todo-box">
        <h2 className="todo-title">To-do List</h2>
        <p className="todo-text">
          Drag and drop to set your main priorities, check when done and create what´s new.
        </p>
      </div>

      <div className="wrapper-todo-board">
        <div className="board-todo-tasks">
          <div className="top-border-todo" />
          <h3 className="board-todo-title">To-do</h3>

          <text className="board-todo-head">
            Take a breath.
            Start doing.
          </text>

          {todoTasks.map((task) => (
            <Task text={task.task} id={task.id} key={task.id} />
          ))}
          <button type="button" className="erase-all-button">erase all</button>

          {/* {todoTasks.map((task) => (
          <div className="board-todo-list">
            <input type="radio" id={task.id} />
            <label htmlFor={task.id}>{task.task}</label>
          </div>
        ))} */}
        </div>

        <div className="board-done-tasks">
          <div className="top-border-done" />
          <h3 className="board-done-title">Done</h3>

          <text className="board-done-head">
            Congratulations!
          </text>

          <text className="board-how-many-tasks-done-text">{`You have done ${doneBoard.length} tasks`}</text>

          {doneBoard.map((task) => (
            <Task text={task.task} id={task.id} key={task.id} />
          ))}
          <button type="button" className="erase-all-button">erase all</button>
        </div>
      </div>
    </>

  );
}
