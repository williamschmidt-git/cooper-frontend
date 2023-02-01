import React, { useState } from 'react';
import './index.css';
import { useDrop } from 'react-dnd';
import Task from '../../components/Task/Task';

export default function ToDo() {
  const [todoTasks, setTodoTasks] = useState([
    {
      id: 1,
      task: 'Tarefa',
    },
    {
      id: 2,
      task: 'Tarefa2',
    },
    {
      id: 3,
      task: 'Tarefa3',
    },
  ]);

  const [doneBoard, setDoneBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'div',
    drop: (item) => addTaskToDoneBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addTaskToDoneBoard = (id) => {
    console.log(id);
  };

  return (
    <>
      <div className="todo-box">
        <h2 className="todo-title">To-do List</h2>
        <p className="todo-text">
          Drag and drop to set your main priorities, check when done and create what´s new.
        </p>
      </div>

      <div className="board-todo-tasks">
        <div className="top-border" />
        <h3 className="board-todo-title">To-do</h3>

        <text className="board-todo-head">
          Take a breath.
          Start doing.
        </text>

        {todoTasks.map((task) => (
          <Task text={task.task} id={task.id} key={task.id} />
        ))}

        {/* {todoTasks.map((task) => (
          <div className="board-todo-list">
            <input type="radio" id={task.id} />
            <label htmlFor={task.id}>{task.task}</label>
          </div>
        ))} */}
      </div>

      <div className="board-done-tasks" ref={drop}>
        {doneBoard.map((task) => (
          <Task text={task.task} id={task.id} key={task.id} />
        ))}
      </div>
    </>

  );
}
