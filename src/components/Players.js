import React from "react";

// class Players extends React.Component {
//   //   constructor(props) {
//   //     super(props);
//   //     this.state = { id: "" };
//   //   }

//   render() {
//     // const gameId = this.props.match.params.gameid;
//     var gameId = "1234";
//     return (
//       <>
//         console.log(this.props)
//         <header className="App-header">Registered to {gameId}</header>
//       </>
//     );
//   }
// }

// export default Players;

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
