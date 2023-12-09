import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const TerminalModal = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.kaliTerminal}>
        <div className={styles.terminalHeader}>
          <button onClick={handleClose}>X</button>
        </div>
        <div className={styles.terminalBody}>
          <p>root@rex:~#</p>
          <div className={styles.terminalCursor}></div>
          {/* Terminal input logic here */}
        </div>
      </div>
    </div>
  );
};

TerminalModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default TerminalModal;