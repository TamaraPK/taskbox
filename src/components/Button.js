// src/components/Button.js

//import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'primereact/button';

export default function Task({ button: { id, title, state }, onArchiveTask, onPinTask }) {
  return (
    <Button label={title} />
  );
}

Task.propTypes = {
  /** Composition of the task */
  button: PropTypes.shape({
    /** Id of the task */
    id: PropTypes.string.isRequired,
    /** Title of the task */
    title: PropTypes.string.isRequired,
    /** Current state of the task */
    state: PropTypes.string.isRequired,
  }),
  /** Events */
  onButtonHover: PropTypes.func,
  onButtonPress: PropTypes.func,
};
