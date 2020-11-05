import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";
import Pyramid from "../Components/Pyramid";
import Navigation from "../Components/Navigation";
import Results from "../Components/Results";

export default function PuzzlePage() {
  const history = useHistory();

  const { questions, currentQuestion, updateCurrentQuestion } = useContext(
    GlobalContext
  );

  const puzzleArray = questions[currentQuestion].rows;
  const puzzleTarget = questions[currentQuestion].target;

  const [currentRow, setCurrentRow] = useState(0);
  const [currentColumn, setCurrentColumn] = useState(0);
  const [played, setPlayed] = useState({
    number: [],
    position: [],
  });
  const [openResults, setOpenResults] = useState(false);
  const [results, setResults] = useState({
    targetAnswer: puzzleTarget,
    answer: 0,
  });

  useEffect(() => {
    setPlayed({
      number: [puzzleArray[0][0]],
      position: ["00"],
    });
  }, []);

  const checkResults = () => {
    if (currentRow >= puzzleArray.length - 2) {
      let total = played.number.reduce((accum, curr) => accum * curr);

      setResults({
        ...results,
        answer: total,
      });

      setOpenResults(true);
    }
  };

  const onClickLeft = () => {
    let array = played.number;
    array.push(puzzleArray[currentRow + 1][currentColumn]);
    let positionArray = played.position;
    positionArray.push((currentRow + 1).toString() + currentColumn.toString());
    setPlayed({
      number: array,
      position: positionArray,
    });

    checkResults();

    setCurrentRow(currentRow + 1);
  };

  const onClickRight = () => {
    let array = played.number;
    array.push(puzzleArray[currentRow + 1][currentColumn + 1]);
    let positionArray = played.position;
    positionArray.push(
      (currentRow + 1).toString() + (currentColumn + 1).toString()
    );
    setPlayed({
      number: array,
      position: positionArray,
    });

    checkResults();

    setCurrentRow(currentRow + 1);
    setCurrentColumn(currentColumn + 1);
  };

  const onClickResults = (props) => {
    if (props === "Try Again?") {
      setCurrentColumn(0);
      setCurrentRow(0);
      setPlayed({
        number: [puzzleArray[0][0]],
        position: ["00"],
      });
      setOpenResults(false);
      setResults({
        targetAnswer: questions[currentQuestion].target,
        answer: 0,
      });
    } else {
      if (currentQuestion < questions.length - 1) {
        updateCurrentQuestion(currentQuestion + 1);
        setCurrentColumn(0);
        setCurrentRow(0);
        setPlayed({
          number: [questions[currentQuestion + 1].rows[0][0]],
          position: ["00"],
        });
        setOpenResults(false);
        setResults({
          targetAnswer: questions[currentQuestion + 1].target,
          answer: 0,
        });
      } else {
        history.push("results");
      }
    }
  };

  return (
    <section>
      <div className="puzzle">
        <span className="header">Target: </span>
        {puzzleTarget}
      </div>

      <Pyramid array={puzzleArray} played={played} />

      {!openResults && (
        <Navigation
          handleOnClickLeft={() => onClickLeft()}
          handleOnClickRight={() => onClickRight()}
        />
      )}

      {openResults && (
        <Results results={results} handleOnClickResults={onClickResults} />
      )}
    </section>
  );
}
