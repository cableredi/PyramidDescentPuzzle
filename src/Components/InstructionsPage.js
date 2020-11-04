import React from "react";
import { NavLink } from "react-router-dom";
import Pyramid from "./Pyramid";

export default function InstructionsPage() {
  const exampleArray = [[1], [2, 3], [4, 1, 1]];

  return (
    <section>
      <div>
        <div className="header">Pyramid Descent Puzzle</div>
        <div className="header__text">
          A Pyramid Descent Puzzle consists of a pyramid of positive integers.
          To solve the puzzle, you must find a path that traverses the pyramid
          from top to bottom visiting numbers whose product is a given target
          value. Each step in the path must go down one row, and go either one
          step to the left or one step to the right.
        </div>
        <div className="header__text">
          For example, suppose the pyramid below has a target value of 2.
        </div>
      </div>

      <Pyramid array={exampleArray} />

      <div className="header__text">
        A solver for this puzzle should traverse left then right, indicating
        that the correct path starts from the 1 on top, goes Left to the 2 on
        the second row, then goes Right to the 1 in the center of the bottom
        row.
      </div>
      
      <button>
        <NavLink to="/puzzle">Get Started</NavLink>
      </button>
    </section>
  );
}
