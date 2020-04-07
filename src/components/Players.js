import React from "react";
import { withRouter } from "react-router-dom";

class Players extends React.Component {
  render() {
    const { match } = this.props;
    const id = match.params.gameid;

    return (
      <>
        <header className="App-header">Registered to {id}</header>
      </>
    );
  }
}

export default withRouter(Players);
