import type { Component } from 'solid-js';
import Window from './Window';
import TaskBar from './TaskBar';

const App: Component = () => {
  return (
    <>
      <svg height="100%" width="100%" style="position:fixed; left: 0 ; top: 0 ; z-index: -100">
        <defs>
          <linearGradient id="gr1" x1="0%" y1="60%" x2="100%" y2="0%">
            <stop offset="5%" style="stop-color:rgb(255,255,3);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" x="0" y="0" fill="url(#gr1)" />
        Sorry but this browser does not support inline SVG.
      </svg>
      <Window />
      <TaskBar />
    </>
  );
};

export default App;
