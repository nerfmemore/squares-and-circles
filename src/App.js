import React from 'react';
//import { useSelector } from 'react-redux';
import './styles.css';

import { ControlPanel } from './features/components/ControlPanel';
import { FiguresList } from './features/components/FiguresList';

function App() {
  return (
    <div>
      <ControlPanel/>
      <FiguresList/>
    </div>
    )
}

export default App;
