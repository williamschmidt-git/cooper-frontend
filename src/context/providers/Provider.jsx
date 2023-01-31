import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context';

function Provider({ children }) {
  const [teste, setTeste] = useState('');
  const value = useMemo(() => ({
    teste, setTeste,
  }), [setTeste]);

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
