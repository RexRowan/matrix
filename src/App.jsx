import React, { useState } from 'react';
import MatrixBackground from './components/MatrixBackground';
import TerminalModal from './components/TerminalModal';
import TerminalIcon from './components/TerminalIcon';
import styles from './components/styles.module.css';

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const openTerminal = () => setIsTerminalOpen(true);
  const closeTerminal = () => setIsTerminalOpen(false);

  return (
    <div className={styles.homepage}>
      <MatrixBackground />
      <TerminalModal isOpen={isTerminalOpen} handleClose={closeTerminal} />
      {!isTerminalOpen && <TerminalIcon handleOpen={openTerminal} />}
    </div>
  );
}

export default App;