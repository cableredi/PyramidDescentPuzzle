import React from "react";

export default function Pyramid(props) {
  const { array, played = [] } = props;
  const classRed = "textRed";
  const classBlack = "textBlack";

  const generatePyramid = array.map((row, index) => {
    
    return (
      <div className="pyramid__row" key={index}>
        {row.map((num, index2) => (
          <div
            className={`pyramid__element ${index.toString() + index2.toString() === played.position[index] ? classRed : classBlack}`}
            key={index + index2}
          >
            {num}
          </div>
        ))}
      </div>
    );
  });

  return <div className="pyramid header">{generatePyramid}</div>;
}
