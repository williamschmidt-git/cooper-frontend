/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context';

function Provider({ children }) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [idRef, setIdRef] = useState(999);

  return (
    <Context.Provider value={{
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
      idRef,
      setIdRef,
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
