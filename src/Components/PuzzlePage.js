import React, { useEffect, useState } from "react";
import { STORE } from "../STORE";
import Pyramid from "./Pyramid";
import Navigation from "./Navigation";
import Results from "./Results";

export default function PuzzlePage() {
  const puzzleArray = STORE.rows;
  const puzzleTarget = STORE.target;

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
    positionArray.push((currentRow + 1).toString() + (currentColumn).toString());
    setPlayed({
      number: array,
      position: positionArray
    });

    checkResults();

    setCurrentRow(currentRow + 1);
  };

  const onClickRight = () => {
    let array = played.number;
    array.push(puzzleArray[currentRow + 1][currentColumn + 1]);
    let positionArray = played.position;
    positionArray.push((currentRow + 1).toString() + (currentColumn + 1).toString());
    setPlayed({
      number: array,
      position: positionArray
    });

    checkResults();

    setCurrentRow(currentRow + 1);
    setCurrentColumn(currentColumn + 1);
  };

  const onClickResults = (props) => {
    if (props === "again") {
      setCurrentColumn(0);
      setCurrentRow(0);
      setPlayed({
        number: [puzzleArray[0][0]],
        position: ["00"]
      });
      setOpenResults(false);
      setResults({
        targetAnswer: puzzleTarget,
        answer: 0,
      });
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
