import React from "react";
import Playlist from "./components/Playlist";
import Status from "./components/Status";
import Controls from "./components/Controls";
import "./App.css";

const App = () => {
  
  return (
    
    <div className="app">
      <h1>React Audio Player</h1>
      <Controls />
      <Status />
      <Playlist />
    </div>

  );
  
};

export default App;