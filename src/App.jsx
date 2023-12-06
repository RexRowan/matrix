import React, { useState } from 'react';
import MatrixBackground from './components/MatrixBackground';
import TerminalModal from './components/TerminalModal';
import KaliIcon from './components/KaliIcon';
import styles from './components/styles.module.css';
import TorIcon from './components/TorIcon';

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const openTerminal = () => setIsTerminalOpen(true);
  const closeTerminal = () => setIsTerminalOpen(false);
  const torWeblink = 'https://torproject.org';

  return (
    <div className={styles.homepage}>
      <MatrixBackground />
      <TerminalModal isOpen={isTerminalOpen} handleClose={closeTerminal} />
      {!isTerminalOpen && <KaliIcon handleOpen={openTerminal} />}

      <TorIcon weblink={torWeblink} />
    </div>
  );

  
}

export default App;