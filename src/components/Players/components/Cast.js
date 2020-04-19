import React from "react";

export function Cast(props) {
    const { character } = this.props;
    return (
        <div>
            <h3>
                You've been cast as a <b>{character.role}</b>!
              </h3>
            <p>Your role is to...{character.desc}</p>
        </div>
    );
}

export default Cast;
