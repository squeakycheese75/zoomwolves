import React, { useState } from "react";

export function NameForm(props) {
  const [name, setName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.registerPlayer(name);
  };

  return (
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
  );
}

export default NameForm;
