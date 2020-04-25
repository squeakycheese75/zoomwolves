import React from "react";

export function Cast(props) {
  const { character } = props;
  return (
    <div>
      <h3>
        You've been cast as a <b>{character.role}</b>!
      </h3>
      <p>{character.script}</p>
    </div>
  );
}

export default Cast;
