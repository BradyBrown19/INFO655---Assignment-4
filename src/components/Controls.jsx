import React from "react";
import { useState } from "react";

const Controls = () => {
  
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
   
    setIsPlaying(!isPlaying);

  };

  return (
    
    <div className="controls">
      
      <button onClick={() => alert("Shuffling playlist!")}>Shuffle</button>
      
      <button onClick={handlePlayPause}>
        {isPlaying ? "Pause" : "Play"}
      </button>

    </div>

  );
  
};

export default Controls;