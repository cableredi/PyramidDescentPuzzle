import React from "react";
import { Route, Switch } from "react-router-dom";
import InstructionsPage from "./Components/InstructionsPage";
import PuzzlePage from "./Components/PuzzlePage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={InstructionsPage} />
        <Route exact path="/puzzle" component={PuzzlePage} />
      </Switch>
    </>
  );
}

export default App;
