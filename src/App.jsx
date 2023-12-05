import { useState } from 'react';
import kaliImage from './assets/kali.png'; // Corrected import statement
import './App.css';
import PropTypes from 'prop-types';

const TerminalModal = ({ isOpen, handleClose }) => {
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

// Correctly defined propTypes outside of the component
TerminalModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

const TerminalIcon = ({ handleOpen }) => {
  return (
    <div className="terminal-icon" onClick={handleOpen}>
      <img src={kaliImage} alt="Terminal Icon" /> {/* Corrected src attribute */}
    </div>
  );
};

// Correctly defined propTypes outside of the component
TerminalIcon.propTypes = {
  handleOpen: PropTypes.func.isRequired,
};

function App() {
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
}

export default App;