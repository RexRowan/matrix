import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import kaliImage from '../assets/kali.png';

const TerminalIcon = ({ handleOpen }) => {
  return (
    <div className={styles.terminalIcon} onClick={handleOpen}>
      <img src={kaliImage} alt="Terminal Icon" />
    </div>
  );
};

TerminalIcon.propTypes = {
  handleOpen: PropTypes.func.isRequired,
};

export default TerminalIcon;