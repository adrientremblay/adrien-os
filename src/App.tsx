import type { Component } from 'solid-js';
import Window from './Window';
import TaskBar from './TaskBar';

const App: Component = () => {
  return (
    <>
      <h1>Hello world!!!!</h1>
      <Window />
      <TaskBar />
    </>
  );
};

export default App;
