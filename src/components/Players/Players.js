import React from "react";
import { withRouter } from "react-router-dom";
import NameForm from "../common/NameForm";
import GameDetails from "./GameDetails";
import Cast from './components/Cast';

class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameid: props.match.params.gameid,
      playerid: "",
      character: { role: "waiting", desc: '' },
      isCast: false,
      isEnrolled: false,
    };
  }

  async loadCharacters() {
    console.log("loadCharacters function has been executed");
    const baseurl =
      process.env.REACT_APP_API_URL + "/api/characters/" + this.state.gameid + "/player/" + this.state.playerid;

    console.log("loadCharacters function has been executed-", baseurl);
    fetch(baseurl)
      // We get the API response and receive data in JSON format...
      .then((response) => response.json())
      .then((data) =>
        this.setState(
          {
            character: data,
            isCast: true,
          }
        )
      )
      .catch((error) => console.log(error));
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
            // console.log("back from setState with playerid. ", data.id);
            this.loadCharacters();
          }
        )
      )
      .catch((error) => console.log(error));
  };

  render() {
    const { match } = this.props;
    const { gameid } = match.params;

    return (
      <>
        <header className="App-header">
          <GameDetails id={gameid} />

          {!this.state.isEnrolled && (
            <NameForm registerPlayer={this.registerPlayer} />
          )}

          <p>Game registered to {gameid}</p>

          {this.state.isCast ? (
            <Cast character={this.state.character} />
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
