import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import RegisterGame from "./components/Game/GamePage";
import Players from "./components/Players/PlayersPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <RegisterGame />
            </>
          )}
        />
        <Route
          exact
          path="/players/:gameid"
          component={(props) => (
            // eslint-disable-next-line react/prop-types
            <Players gameid={props.match.params.gameid} {...props} />
          )}
        />
        {/* <Route
          path="/players/:gameid"
          render={({ match }) => <Players match={match} />}
        /> */}
      </Switch>
    </div>
  );
}

export default App;
