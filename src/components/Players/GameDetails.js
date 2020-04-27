import React from "react";

export function GameDetails(props) {
  return (
    <div>
      <h3>Welcome to Zoomwolves.</h3>
      <br />
      <p className="lead">
        A game of social engineering. Please enter your name to join the party
        and then wait for your character to be cast.
      </p>

      <p>
        <b>Secrecy is paramount!</b> Don't tell anyone your character. Or you
        may end up as dinner.
      </p>
      <br />
      <hr className="my-2" />
    </div>
  );
}

export default GameDetails;
