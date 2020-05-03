import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

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
Register.propTypes = {
  handleRegister: PropTypes.func.isRequired,
};

export default Register;
