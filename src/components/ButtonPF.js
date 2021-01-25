// src/components/ButtonP.js

//import React from 'react';
import PropTypes from "prop-types";
import { Button } from "primereact/button";

export default function ButtonPF({ button: { id, title, state, disabled } }) {
  return (
    <Button
      label={title}
      className={`${state ? "p-button-" + state : ""} ${
        disabled ? "p-disabled" : ""
      }`}
    />
  );
}

Button.propTypes = {
  /** Composition of the button */
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
