import React from "react";
import PropTypes from "prop-types";

const Registered = ({ id, players = {} }) => {
  // eslint-disable-next-line no-undef
  const url = process.env.REACT_APP_URL + "/players/" + id;

  return (
    <div className="container-fluid">
      <h2>Game is now setup!</h2>
      <br />
      <p>Send this link to your players:</p>
      <br />
      <a href={url} target="_blank" rel="noopener noreferrer">
        {url}
      </a>
      <br />
      <h2>Registered players: {players.length}</h2>
      <ul className="list-unstyled">
        {players.map((player) => (
          <li key={player.name}>
            {player.name} : {player.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

Registered.propTypes = {
  id: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired,
};
export default Registered;
