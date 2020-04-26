import React from "react";
import { withRouter } from "react-router-dom";
import NameForm from "./components/NameForm";
import GameDetails from "./GameDetails";
import Cast from "./components/Cast";
import { Jumbotron, Container } from "reactstrap";

class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameid: props.match.params.gameid,
      playerid: "",
      character: { role: "waiting", desc: "" },
      isCast: false,
      isEnrolled: false,
      _isMounted: false,
      name: "",
    };
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
  }

  async loadCharacters() {
    const baseurl =
      process.env.REACT_APP_API_URL +
      "/api/characters/" +
      this.state.gameid +
      "/player/" +
      this.state.playerid;

    fetch(baseurl)
      // We get the API response and receive data in JSON format...
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          character: data.character,
          isCast: data.isCast,
        })
      )
      .catch((error) => console.log(error));
  }

  monitorCasting() {
    if (this.state._isMounted) {
      this.loadCharacters();
    }
    // Refesh until cast
    var refreshRate = 5 * 1000;
    setInterval(() => {
      if (this._isMounted) {
        // if (!this.state.isCast) {
        this.loadCharacters();
        // }
      }
    }, refreshRate);
  }

  registerPlayer = (name) => {
    const baseurl =
      process.env.REACT_APP_API_URL + "/api/players/" + this.state.gameid;

    // console.log(baseurl);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    };
    fetch(baseurl, requestOptions)
      .then((response) => response.json())
      .then((data) =>
        this.setState(
          {
            playerid: data.id,
            isEnrolled: true,
            name,
          },
          () => {
            this.monitorCasting();
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
        <div>
          <Jumbotron fluid>
            <Container fluid>
              <GameDetails id={gameid} name={this.state.name} />

              <br />
              <p className="lead">
                A game of social engineering. Please enter your name to join the
                party and then wait for your character to be cast.
              </p>

              <p>
                <b>Secrecy is important!</b> Don't tell anyone your character.
                Or you may end up as dinner.
              </p>
              <br />
              <hr className="my-2" />
              <br />
              {!this.state.isEnrolled && (
                <NameForm registerPlayer={this.registerPlayer} />
              )}
              <br />
              {this.state.isCast ? (
                <Cast character={this.state.character} />
              ) : (
                this.state.isEnrolled && (
                  <>
                    <h3>Waiting for the moderator to cast the characters.</h3>
                  </>
                )
              )}
            </Container>
          </Jumbotron>
        </div>
        {/* </header> */}
      </>
    );
  }
}

export default withRouter(Players);
