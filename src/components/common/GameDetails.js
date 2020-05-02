import React from "react";

export function GameDetails(props) {
  return (
    <div className="markdown">
      <article class="markdown-body" align="left">
        <p>
          Zoomwolves helps you to setup a game, distribute the game joining link
          to the players and to run the random player casting.
        </p>
        <p>
          It's designed to run alongside a conferencing tool like{" "}
          <a href="https://zoom.us/" target="_blank" rel="noopener noreferrer">
            Zoom
          </a>{" "}
          or{" "}
          <a
            href="https://jitsi.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jitsi
          </a>
          .
        </p>
        <br />
        <p>For 6 to 15 players.</p>
        <hr className="my-2" />
      </article>
    </div>
  );
}

export default GameDetails;
