import React from "react";

export default function Results(props) {
  const targetAnswer = props.results.targetAnswer;
  const answer = props.results.answer;
  const handleOnClickResults = props.handleOnClickResults;

  let displayResult = "";
  let buttonText = "";

  if (targetAnswer === answer) {
    displayResult = "CORRECT!";
    buttonText = "Next Question";
  } else {
    displayResult = `Sorry, that is not the correct Target of ${targetAnswer}`;
    buttonText = "Try Again?";
  }

  const onClickResults = () => {
    handleOnClickResults(buttonText);
  };

  return (
    <div className="results">
      <div><strong>Your Answer: </strong>{answer}</div>
      <div className="results__result">{displayResult}</div>
      <div className="link__button">
        <button onClick={() => onClickResults()}>{buttonText}</button>
      </div>
    </div>
  );
}
