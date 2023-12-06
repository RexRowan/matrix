import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import torImage from '../assets/tor.png'; 

const TorIcon = ({ weblink }) => {
  const openLink = () => {
    window.open(weblink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.torIcon} onClick={openLink}>
      <img src={torImage} alt="Tor Icon" />
    </div>
  );
};

TorIcon.propTypes = {
  weblink: PropTypes.string.isRequired,
};

export default TorIcon;