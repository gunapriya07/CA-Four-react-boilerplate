import React from "react";
import "../App.css"

function Result({ score, totalQuestions, restartGame }) {
  return (
    <div>
      <h1 className="score-h1">Your Score: {score}/{totalQuestions}</h1>
      <button className="again-btn" onClick={restartGame}>Play Again</button>
    </div>
  );
}

export default Result;
