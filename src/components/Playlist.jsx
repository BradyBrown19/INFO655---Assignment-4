import React from "react";
import { useEffect, useState } from "react";
import Song from "./Song";
import Podcast from "./Podcast";

const Playlist = () => {
  
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    
    fetch("http://localhost:3001/audio")
      .then((response) => response.json())
      .then((data) => setTracks(data))
      .catch((error) => console.error("Error fetching data:", error));

  }, []);

  return (
    
    <div>
      
      {tracks.length === 0 ? <p>Loading tracks...</p> : 
        tracks.map((track, index) =>
          track.type === "song" ? (
            <Song key={index} {...track} onDoubleClick={() => {}} />
          ) : (
            <Podcast key={index} {...track} onDoubleClick={() => {}} />
          )

      )}

    </div>

  );
  
};

export default Playlist;