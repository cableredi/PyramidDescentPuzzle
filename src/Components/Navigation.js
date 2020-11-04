import React from "react";

export default function Navigation(props) {
  const {handleOnClickRight, handleOnClickLeft} = props;
  
  return (
    <div className="results">
      <div className="results__button">
        <button onClick={handleOnClickLeft}>Left</button>
        <button onClick={handleOnClickRight}>Right</button>
      </div>
    </div>
  );
}
