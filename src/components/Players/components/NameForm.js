import React, { useState } from "react";
import PropTypes from "prop-types";

export function NameForm(props) {
  const [name, setName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.registerPlayer(name);
  };

  return (
    <div className="markdown" align="left">
      <br />
      <h5>
        Please enter your name to join the party and then wait for your
        character to be cast.{" "}
      </h5>
      <br />
      <h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </h3>
    </div>
  );
}

NameForm.propTypes = {
  registerPlayer: PropTypes.func.isRequired,
};
export default NameForm;
