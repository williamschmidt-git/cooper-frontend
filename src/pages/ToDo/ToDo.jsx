/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import './index.css';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Task from '../../components/Task/Task';

export default function ToDo() {
  const [todoTasks, setTodoTasks] = useState([
    {
      id: '1',
      task: 'Develop the To-do list page',
    },
    {
      id: '2',
      task: 'Create the drag-and-drop function',
    },
    {
      id: '3',
      task: 'Add new tasks',
    },
  ]);

  const [doneBoard, setDoneBoard] = useState([]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    // if (result.source.droppableId === 'doneTasks') return;

    if (result.destination.droppableId === result.source.droppableId) {
      const items = Array.from(todoTasks);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);

      setTodoTasks(items);
    }

    if (result.destination.droppableId === 'doneTasks') {
      const items = Array.from(todoTasks);
      const [removedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 1, removedItem);
      setDoneBoard([...doneBoard, removedItem]);
      const newArr = todoTasks.filter((e) => e !== removedItem);
      setTodoTasks(newArr);
    }
  };

  const handleOnDragStart = (result) => {
    // console.log(result);
  };

  return (
    <>
      <div className="todo-box">
        <h2 className="todo-title">To-do List</h2>
        <p className="todo-text">
          Drag and drop to set your main priorities, check when done and create what´s new.
        </p>
      </div>

      <DragDropContext onDragEnd={handleOnDragEnd} onDragStart={handleOnDragStart}>

        <Droppable droppableId="tasks">
          {(provided, snapshot) => (
            <div className="wrapper-todo-board">
              <div className={snapshot.isDraggingOver ? 'board-todo-tasks-active' : 'board-todo-tasks'}>
                <div className="top-border-todo" />
                <h3 className="board-todo-title">To-do</h3>

                <text className="board-todo-head">
                  Take a breath.
                  Start doing.
                </text>

                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {provided.placeholder}
                  {todoTasks.map((task, index) => (
                    <Task
                      text={task.task}
                      id={task.id.toString()}
                      key={task.id}
                      index={index}
                    />
                  ))}
                </div>
                <button type="button" className="erase-all-button">erase all</button>
              </div>

              <Droppable droppableId="doneTasks">
                {(innerProvided, innerSnapshot) => (
                  <div className={innerSnapshot.isDraggingOver ? 'board-done-tasks-active' : 'board-done-tasks'}>
                    <div className="top-border-done" />
                    <h3 className="board-done-title">Done</h3>

                    <text className="board-done-head">
                      Congratulations!
                    </text>

                    <text className="board-how-many-tasks-done-text">{`You have done ${doneBoard.length} tasks`}</text>

                    <div
                      {...innerProvided.droppableProps}
                      ref={innerProvided.innerRef}
                    >
                      {innerProvided.placeholder}
                      {doneBoard.map((task, index) => (
                        <Task text={task.task} id={task.id} key={task.id} index={index} />
                      ))}
                    </div>
                    <button type="button" className="erase-all-button">erase all</button>
                  </div>
                )}
              </Droppable>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>

  );
}
