import React from "react";
import { Button } from "react-bootstrap";

export function Home(props) {
  return (
    <div>
      <h1>Register a new game? </h1>
      <Button variant="primary" onClick={this.handleRegister}>
        Create
      </Button>
    </div>
  );
}
export default Home;
