import React from "react";

export default function Results(props) {
  const targetAnswer = props.results.targetAnswer;
  const answer = props.results.answer;
  const handleOnClickResults = props.handleOnClickResults;
  let buttonDisplay = "button_show";

  let displayResult = "";
  let buttonText = "";

  if (targetAnswer === answer) {
    console.log('got here')
    displayResult = "CORRECT!";
    buttonDisplay = "button__dontShow";
  } else {
    displayResult = `Sorry, that is not the correct Target of ${targetAnswer}`;
    buttonText = "Try Again?";
  }

  return (
    <div className="results">
      <div>Your Answer: {answer}</div>
      <div>{displayResult}</div>
      <button
        onClick={() => handleOnClickResults("again")}
        className={buttonDisplay}
      >
        {buttonText}
      </button>
    </div>
  );
}
