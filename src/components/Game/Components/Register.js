import React from "react";
import { Button } from "react-bootstrap";

export function Register(props) {
  const handleRegister = (evt) => {
    evt.preventDefault();
    props.handleRegister();
  };

  return (
    <div className="markdown">
      <br></br>
      <h1>
        <Button variant="primary" onClick={handleRegister} size="lg">
          Click here to create a new game!
        </Button>
      </h1>
      <br />
    </div>
  );
}

export default Register;
