import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import RegisterGame from "./components/RegistersGame";
import Players from "./components/Players";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Switch>
      <div className="App">
        <Route
          exact
          path="/"
          render={() => (
            <>
              <RegisterGame />
            </>
          )}
        />
        {/* <Route path="/players/:id" render={() => <Players />} /> */}
        <Route
          exact
          path="/players/:gameid"
          component={(props) => <Players gameid={props.match.params.gameid} />}
        />
      </div>
    </Switch>
  );
}

export default App;
