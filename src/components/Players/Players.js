import React from "react";
import { withRouter } from "react-router-dom";
import NameForm from "../common/NameForm";
import GameDetails from "./GameDetails";

class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameid: props.match.params.gameid,
      playerid: "",
      character: { role: "waiting", desc: "......" },
      isCast: false,
      isEnrolled: false,
    };
  }

  async loadCharacters() {
    console.log("loadCharacters function has been executed");
    const baseurl =
      process.env.REACT_APP_API_URL + "/api/characters/" + this.state.gameid + "/" + this.state.playerid;
    console.log("loadCharacters function has been executed-", baseurl);
    const response = await fetch(baseurl);
    const json = await response.json();
    console.log("back from characterswith ", json);
    this.setState({ character: json, isCast: true });
  }

  registerPlayer = (name) => {
    const baseurl =
      process.env.REACT_APP_API_URL + "/api/players/" + this.state.gameid;
    console.log(baseurl);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    };
    fetch(baseurl, requestOptions)
      // We get the API response and receive data in JSON format...
      .then((response) => response.json())
      .then((data) =>
        this.setState(
          {
            playerid: data.id,
            isEnrolled: true,
          },
          () => {
            console.log("back from setState with playerid. ", data.id);
            this.loadCharacters();
          }
        )
      )
      // .then(() => this.loadCharacters())
      .catch((error) => console.log(error));
  };

  render() {
    const { match } = this.props;
    const id = match.params.gameid;

    return (
      <>
        <header className="App-header">
          <GameDetails id={id} />
          {!this.state.isEnrolled && (
            <NameForm registerPlayer={this.registerPlayer} />
          )}

          {this.state.isCast ? (
            <>
              <h3>
                You've been cast as a <b>{this.state.data.role}</b>!
              </h3>
              <p>Your role is to...{this.state.data.desc}</p>
            </>
          ) : (
              <>
                <h3>Waiting for character casting....</h3>
              </>
            )}
        </header>
      </>
    );
  }
}

export default withRouter(Players);
