import React from 'react';
import './styles.css';
import { SideMenu } from './features/components/SideMenu';
import { FiguresList } from './features/components/FiguresList';

function App() {
  return (
    <div>
      <SideMenu/>
      <FiguresList/>
    </div>
    )
}

export default App;
