/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useContext } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Context from '../../context/Context';
import './index.css';
import Task from '../Task/Task';
import { updateTask, listTasks, deleteAll } from '../../requests/task';
import CreateTaskModal from '../CreateTaskModal/CreateTaskModal';
import EditTaskModal from '../EditTaskModal/EditTaskModal';
import DeleteTaskModal from '../DeleteTaskModal/DeleteTaskModal';

export default function DragAndDrop() {
  // const [todoTasks, setTodoTasks] = useState([]);
  // const [doneBoard, setDoneBoard] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const {
    setShowCreateTaskModal,
    showCreateTaskModal,
    showEditTaskModal,
    showDeleteTaskModal,
    toDoTasks,
    setToDoTasks,
    doneBoard,
    setDoneBoard,
  } = useContext(Context);

  const getCookie = () => {
    const token = document.cookie.split('=').pop();
    return token;
  };

  // const requestGetApi = async () => {
  //   const { tasks } = await listTasks(getCookie());

  //   if (tasks) {
  //     const toDoTasksArray = tasks.filter((e) => e.isTaskDone === false);
  //     const doneTasksArray = tasks.filter(((e) => e.isTaskDone !== false));

  //     setTodoTasks([...toDoTasksArray]);
  //     setDoneBoard([...doneTasksArray]);
  //   }
  // };

  useEffect(() => {
    async function requestGetApi() {
      const { tasks } = await listTasks(getCookie());
      const toDoTasksArray = tasks.filter((e) => e.isTaskDone === false);
      const doneTasksArray = tasks.filter(((e) => e.isTaskDone !== false));

      setToDoTasks([...toDoTasks, ...toDoTasksArray]);
      setDoneBoard([...doneTasksArray]);
    }
    requestGetApi();
  }, []);

  const handleOnDragEnd = async (result) => {
    if (!result.destination) return;

    // if (result.destination.droppableId === result.source.droppableId) {
    //   const items = Array.from(todoTasks);
    //   const [reorderedItem] = items.splice(result.source.index, 1);
    //   items.splice(result.destination.index, 0, reorderedItem);

    //   setTodoTasks(items);
    // }

    if (result.destination.droppableId === 'doneTasks') {
      const items = Array.from(toDoTasks);
      if (result.destination.droppableId === result.source.droppableId) {
        return;
      }

      const [removedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 1, removedItem);
      removedItem.isTaskDone = true;
      updateTask(getCookie(), removedItem);
      setDoneBoard([...doneBoard, removedItem]);
      const newArr = toDoTasks.filter((e) => e !== removedItem);
      setToDoTasks(newArr);
    }
  };

  const handleEraseButton = async (e) => {
    if (e.target.parentNode.className.includes('todo')) {
      await deleteAll(getCookie(), toDoTasks);
      setToDoTasks([]);
    }
    if (e.target.parentNode.className.includes('done')) {
      deleteAll(getCookie(), doneBoard);
      setDoneBoard([]);
    }
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="tasks">
        {(provided, snapshot) => (
          <section className="wrapper-todo-board">
            <div className={snapshot.isDraggingOver ? 'board-todo-tasks-active' : 'board-todo-tasks'}>
              <div className="top-border-todo" />
              <h3 className="board-todo-title">To-do</h3>

              <h3 className="board-todo-head">
                Take a breath.
                Start doing.
              </h3>

              <input
                type="image"
                src="/assets/svgs/plus-svgrepo-com.svg"
                alt="plus-circle"
                className="add-btn"
                onClick={() => setShowCreateTaskModal(true)}
              />
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {provided.placeholder}
                {toDoTasks.length > 0 && toDoTasks.map((task, index) => (
                  <Task
                    text={task.taskToDo}
                    id={task.id.toString()}
                    key={task.id.toString()}
                    index={index}
                    droppableId="tasks"
                  />
                ))}
              </div>
              <button type="button" className="erase-all-button" onClick={(e) => handleEraseButton(e)}>erase all</button>
            </div>

            <Droppable droppableId="doneTasks">
              {(innerProvided, innerSnapshot) => (
                <div className={innerSnapshot.isDraggingOver ? 'board-done-tasks-active' : 'board-done-tasks'}>
                  <div className="top-border-done" />
                  <h3 className="board-done-title">Done</h3>

                  <h3 className="board-done-head">
                    Congratulations!
                  </h3>

                  <h4 className="board-how-many-tasks-done-text">{`You have done ${doneBoard.length} tasks`}</h4>

                  <div
                    {...innerProvided.droppableProps}
                    ref={innerProvided.innerRef}
                  >
                    {innerProvided.placeholder}
                    {doneBoard.map((task, index) => (
                      <Task
                        text={task.taskToDo}
                        id={task.id.toString()}
                        key={task.id.toString()}
                        index={index}
                        droppableId="doneTasks"
                      />
                    ))}
                  </div>
                  <button type="button" className="erase-all-button" onClick={(e) => handleEraseButton(e)}>erase all</button>
                </div>
              )}
            </Droppable>
          </section>
        )}
      </Droppable>
      {
        showCreateTaskModal
        && <CreateTaskModal />
      }
      {
        showEditTaskModal
        && <EditTaskModal />
      }
      {
        showDeleteTaskModal
        && <DeleteTaskModal />
      }
    </DragDropContext>
  );
}
