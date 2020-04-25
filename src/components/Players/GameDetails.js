import React from "react";

export function GameDetails(props) {
  return (
    <div>
      <h1>Game registered to {props.id}</h1>
      {props.name.trim() !== "" && <h3>Welcome to zoomwolves {props.name}.</h3>}
    </div>
  );
}

export default GameDetails;
