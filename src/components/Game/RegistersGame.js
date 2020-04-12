import React from "react";
import { Button } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";

class RegisterGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isRegistered: false, id: "" };
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister() {
    const baseurl = process.env.REACT_APP_API_URL + "/api/games";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Bobby Xerox" }),
    };
    fetch(baseurl, requestOptions)
      // We get the API response and receive data in JSON format...
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          id: data.id,
          isRegistered: true,
        })
      )
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <header className="App-header">
          {this.state.isRegistered ? (
            <div>
              <p>You're now registered!</p>
              <br />
              <p>Send this link to your players:</p>
              <br />
              <td>
                <a
                  href={"http://localhost:3000/players/" + this.state.id}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://localhost:5000/api/game+{this.state.id}
                </a>
              </td>
              <CopyToClipboard
                text={"http://localhost:3000/players/" + this.state.id}
                onCopy={() => this.setState({ copied: true })}
              >
                <Button variant="primary">Copy to clipboard.</Button>
              </CopyToClipboard>
            </div>
          ) : (
            <div>
              <h1>Register a new game? </h1>
              <Button variant="primary" onClick={this.handleRegister}>
                Create
              </Button>
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default RegisterGame;