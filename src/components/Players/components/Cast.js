import React from "react";
import PropTypes from "prop-types";

export function Cast(props) {
  const { character } = props;
  return (
    <div>
      <h5 className="display-3">
        You&apos;ve been cast as a <b>{character.role}</b>
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
Cast.propTypes = {
  character: PropTypes.string.isRequired,
};
export default Cast;
