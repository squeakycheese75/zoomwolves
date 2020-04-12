import React, { useState } from "react";

export function NameForm(props) {
  const [name, setName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // alert(`Submitting Name ${name}`);
    props.registerPlayer(name);
  };

  return (
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
  );
}

export default NameForm;
