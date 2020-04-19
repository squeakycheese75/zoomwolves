import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import RegisterGame from "./components/Game/RegistersGame";
import Players from "./components/Players/Players";
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
          component={(props) => <Players gameid={props.match.params.gameid} />}
        />
      </Switch>
    </div>
  );
}

export default App;
