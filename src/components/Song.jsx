import React from "react";
import PropTypes from "prop-types";

const Song = ({ title, artist, year, onDoubleClick }) => {
  
  if (!title || !artist || typeof year !== "number") {
    
    console.error(`Invalid song data: ${title}, ${artist}, ${year}`);
    
    return <div className="error">Error: Invalid song data.</div>;

  }

  return (
    
    <div className="song" onDoubleClick={() => onDoubleClick(title)}>
      <h3>{title}</h3>
      <p>{artist} ({year})</p>
    </div>

  );

};

Song.propTypes = {
  
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  onDoubleClick: PropTypes.func.isRequired,

};

export default Song;