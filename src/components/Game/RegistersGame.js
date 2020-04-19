import React from "react";
import { Button } from "react-bootstrap";
import Registered from "./Components/Registered";

class RegisterGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: false,
      id: "",
      players: [],
      isCast: false,
      _isMounted: false,
      backgroundColor: "#ff33cc",
    };
    this.handleRegister = this.handleRegister.bind(this);
    this.handleCast = this.handleCast.bind(this);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
  }

  async handleRegister() {
    const baseurl = process.env.REACT_APP_API_URL + "/api/games";
    console.log(baseurl);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Bobby Xerox" }),
    };
    await fetch(baseurl, requestOptions)
      .then((response) => response.json())
      .then((data) =>
        this.setState(
          {
            id: data.id,
            isRegistered: true,
          },
          () => {
            console.log("setting data back");
            this.montiorPlayers();
          }
        )
      )
      .catch((error) => console.log(error));
  }

  async handleCast() {
    const baseurl =
      process.env.REACT_APP_API_URL + "/api/games/" + this.state.id + "/close";

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    await fetch(baseurl, requestOptions)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          isCast: true,
          players: data.players,
        })
      )
      .catch((error) => console.log(error));
  }

  async loadCharacters() {
    // console.log("loadCharacters function has been executed");
    const baseurl =
      process.env.REACT_APP_API_URL + "/api/games/" + this.state.id;
    // console.log(baseurl);
    const response = await fetch(baseurl);
    const json = await response.json();
    console.log("back from loadCharacters");
    this.setState({ players: json.players });
  }

  montiorPlayers() {
    if (this.state.isRegistered) {
      this.loadCharacters();
    }
    var refreshRate = 5 * 1000;
    setInterval(() => {
      if (this.state.isRegistered && this._isMounted) {
        this.loadCharacters();
      }
    }, refreshRate);
  }

  render() {
    return (
      <div>
        <header
          className="App-header"
          // style={{ backgroundColor: this.state.backgroundColor }}
        >
          {this.state.isRegistered ? (
            <div>
              <Registered id={this.state.id} players={this.state.players} />

              <Button variant="primary" onClick={this.handleCast}>
                Close and cast
              </Button>
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
