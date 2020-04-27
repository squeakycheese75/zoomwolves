import React from "react";

export function Cast(props) {
  const { character } = props;
  return (
    <div>
      <h5 className="display-3">
        You've been cast as a <b>{character.role}</b>
      </h5>
      <h4>Your role:</h4>
      <ul>
        {character.script.map((job) => (
          <li key={job}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;
