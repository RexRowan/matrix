import { useState } from 'react';
import './App.css';

const TerminalModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

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

const HomePage = () => {
  return (
    <div className="homepage">
      <TerminalModal />
      {/* Rest of the homepage content */}
    </div>
  );
};

export default HomePage;