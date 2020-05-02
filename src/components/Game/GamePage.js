import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import Registered from "./Components/Registered";
import Rules from "../common/Rules";
import GameDetails from "../common/GameDetails";
import Welcome from "../common/Welcome";
import Register from "./Components/Register";

class RegisterGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: false,
      id: "",
      players: [],
      isCast: false,
      _isMounted: false,
      backgroundColor: "#212529",
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
            backgroundColor: data.colour,
          },
          () => {
            console.log("setting data back");
            this.monitorPlayers();
          }
        )
      )
      .catch((error) => console.log(error));
  }

  async handleCast() {
    const baseurl =
      process.env.REACT_APP_API_URL + "/api/games/" + this.state.id + "/close";
    console.log(baseurl);
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
    const baseurl =
      process.env.REACT_APP_API_URL + "/api/games/" + this.state.id;
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    await fetch(baseurl, requestOptions)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          players: data.players,
        })
      )
      .catch((error) => console.log(error));
  }

  monitorPlayers() {
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
      <div className="container">
        <Jumbotron>
          {this.state.isRegistered ? (
            <div>
              <Registered id={this.state.id} players={this.state.players} />
              <br />
              <Button variant="primary" onClick={this.handleCast}>
                Close and cast
              </Button>
            </div>
          ) : (
            <div>
              <Welcome />
              <GameDetails />
              <Register handleRegister={this.handleRegister} />
              <Rules />
            </div>
          )}
        </Jumbotron>
        {this.state.isCast && <Rules />}
      </div>
    );
  }
}

export default RegisterGame;
