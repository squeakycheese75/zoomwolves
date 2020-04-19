import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

const Registered = ({ id, players = {} }) => {
  const url = "http://localhost:3000/players/" + id;

  return (
    <div>
      <p>You're now registered! {id}</p>
      <br />
      <p>Send this link to your players:</p>
      <br />
      <a href={url} target="_blank" rel="noopener noreferrer">
        {url}
      </a>
      <br />
      <CopyToClipboard
        text={url}
        onCopy={() => this.setState({ copied: true })}
      >
        <Button variant="primary">Copy to clipboard.</Button>
      </CopyToClipboard>
      {/* <Link to={"/players/" + id}>Home</Link> */}
      <ol>
        <h2>Registered players. ({players.length})</h2>
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
