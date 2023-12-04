import { useState } from 'react';
import './App.css';
import PropTypes from 'prop-types';

const TerminalModal = ({ isOpen, handleClose }) => {
  TerminalModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="kali-terminal">
        <div className="terminal-header">
          <button onClick={handleClose}>X</button>
        </div>
        <div className="terminal-body">
          <p>root@rex:~#</p>
          {/* Terminal input logic here */}
        </div>
      </div>
    </div>
  );
};

const TerminalIcon = ({ handleOpen }) => {
  return (
    <div className="terminal-icon" onClick={handleOpen}>
      <img src="/src/assets/kali.png" alt="Terminal Icon" />
    </div>
  );
};

TerminalIcon.propTypes = {
  handleOpen: PropTypes.func.isRequired,
};

const HomePage = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const openTerminal = () => setIsTerminalOpen(true);
  const closeTerminal = () => setIsTerminalOpen(false);

  return (
    <div className="homepage">
      <TerminalModal isOpen={isTerminalOpen} handleClose={closeTerminal} />
      {!isTerminalOpen && <TerminalIcon handleOpen={openTerminal} />}
      {/* Rest of the homepage content */}
    </div>
  );
};

export default HomePage