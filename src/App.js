import React, { useContext, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { GlobalContext } from "./Context/GlobalContext";
import InstructionsPage from "./Containers/InstructionsPage";
import PuzzlePage from "./Containers/PuzzlePage";
import ResultsPage from "./Containers/ResultsPage";

function App() {
  const { setQuestions, setCurrentQuestion } = useContext(GlobalContext);

  useEffect(() => {
    setQuestions();
    setCurrentQuestion();
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/" component={InstructionsPage} />
        <Route exact path="/puzzle" component={PuzzlePage} />
        <Route exact path="/results" component={ResultsPage} />
      </Switch>
    </>
  );
}

export default App;
