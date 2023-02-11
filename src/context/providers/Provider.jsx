/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context';

function Provider({ children }) {
  const [toDoTasks, setToDoTasks] = useState([]);
  const [doneBoard, setDoneBoard] = useState([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);
  const [showDeleteTaskModal, setShowDeleteTaskModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [idRef, setIdRef] = useState(999);

  return (
    <Context.Provider value={{
      toDoTasks,
      setToDoTasks,
      doneBoard,
      setDoneBoard,
      showLoginModal,
      setShowLoginModal,
      showRegisterModal,
      setShowRegisterModal,
      isLoggedIn,
      setIsLoggedIn,
      showCreateTaskModal,
      setShowCreateTaskModal,
      showEditTaskModal,
      setShowEditTaskModal,
      showDeleteTaskModal,
      setShowDeleteTaskModal,
      idRef,
      setIdRef,
      rerender,
      setRerender,
    }}
    >
      {children}
    </Context.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
