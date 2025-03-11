import React from "react";
import PropTypes from "prop-types";

const Podcast = ({ season, episode, episodeTitle, onDoubleClick }) => {
 
  if (!episodeTitle || typeof episode !== "number") {
    
    console.error(`Invalid podcast data: ${episodeTitle}, ${episode}`);
    return <div className="error">Error: Invalid podcast data.</div>;

  }

  const displayText = season

    ? `Season ${season} Episode ${episode}`
    : `Episode ${episode}`;

  return (
    
    <div className="podcast" onDoubleClick={() => onDoubleClick(episodeTitle)}>
      
      <h3>{episodeTitle}</h3>
      <p>{displayText}</p>

    </div>

  );

};

Podcast.propTypes = {
 
  season: PropTypes.number,
  episode: PropTypes.number.isRequired,
  episodeTitle: PropTypes.string.isRequired,
  onDoubleClick: PropTypes.func.isRequired,
  
};

export default Podcast;