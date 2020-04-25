import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "react-bootstrap";

const Registered = ({ id, players = {} }) => {
  const url = "http://localhost:3000/players/" + id;

  return (
    <div>
      <h2>Game is now setup!</h2>
      <br />
      <p>Send this link to your players:</p>
      <br />
      <a href={url} target="_blank" rel="noopener noreferrer">
        {url}
      </a>{" "}
      <CopyToClipboard
        text={url}
        onCopy={() => this.setState({ copied: true })}
      >
        <Button variant="primary">Copy to clipboard.</Button>
      </CopyToClipboard>
      <br />
      <h2>Registered players: Total ({players.length})</h2>
      <ol>
        {players.map((player) => (
          <li key={player.name}>
            {player.name} : {player.role}
          </li>
        ))}
      </ol>
    </div>
  );
};
export default Registered;
