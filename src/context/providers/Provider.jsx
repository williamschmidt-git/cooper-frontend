/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context';

function Provider({ children }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Context.Provider value={{ showModal, setShowModal }}>
      {children}
    </Context.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
