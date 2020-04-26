import React from "react";

export function GameDetails(props) {
  return (
    <div>
      {/* <h1>Game registered to {props.id}</h1> */}
      {props.name.trim() !== "" ? (
        <h2 className="display-3">Welcome to Zoomwolves, {props.name}.</h2>
      ) : (
        <h2 className="display-3">Welcome to Zoomwolves.</h2>
      )}
    </div>
  );
}

export default GameDetails;
