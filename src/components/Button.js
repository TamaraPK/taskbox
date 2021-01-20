// src/components/Button.js

//import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'primereact/button';

export default function Task({ button: { id, title, state, disabled } }) {
  return (
    <Button label={title} className={`${state ? 'p-button-' + state : ''} ${disabled ? 'p-disabled' : ''}`} />   
  );
}

Task.propTypes = {
  /** Composition of the task */
  button: PropTypes.shape({
    /** Id */
    id: PropTypes.string.isRequired,
    /** Title */
    title: PropTypes.string.isRequired,
    /** Current state */
    state: PropTypes.string,
    /** Enable-disable flag */
    disabled: PropTypes.string,
  }),
  /** Events */
};