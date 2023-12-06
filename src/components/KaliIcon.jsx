import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import kaliImage from '../assets/kali.png';

const KaliIcon = ({ handleOpen }) => {
  return (
    <div className={styles.kaliIcon} onClick={handleOpen}>
      <img src={kaliImage} alt="Kali Icon" />
    </div>
  );
};

KaliIcon.propTypes = {
  handleOpen: PropTypes.func.isRequired,
};

export default KaliIcon;