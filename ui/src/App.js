import React from 'react';
import Teaser from './components/Teaser';
import Content from './components/Content';
import DraggableList from './components/DraggableList';

const App = () => {
  return (
    <div>
      <Teaser />
      <Content />
      <DraggableList />
    </div>
  );
};

export default App;
