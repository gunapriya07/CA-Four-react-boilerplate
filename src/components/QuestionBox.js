import React, { useState } from "react";
import "../App.css"; // Import the main CSS file
import logo from "../assect/logo.png"; // Assuming this is the correct path to your logo
import questions from "../questions"; // Assuming this is the correct path to your questions file

function Questions() {
  // State variables
  const [highlighted, setHighlighted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Function to handle highlighting
  const handleHighlightClick = () => {
    setHighlighted(true);
  };

  // Function to remove highlighting
  const handleRemoveHighlightClick = () => {
    setHighlighted(false);
  };

  // Function to handle option click
  const handleOptionClick = (isCorrect) => {
    // Increment the score for each correct answer
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    // Move to the next question
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setHighlighted(false);

    // If all questions are answered, show results
    if (currentQuestion + 1 === questions.length) {
      setShowResults(true);
    }
  };

  // Function to restart the game
  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  return (
    <>
      {/*dark/light mode */}
      <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        {/* Logo and App Name */}
        <div>
          <img src={logo} alt="My Logo" className="logo" />
          <h2 className="logo-name">Quiz App</h2>
        </div>

        {/* Toggle Dark Mode button */}
        <button className="toggle-btn" onClick={toggleDarkMode}>
          {darkMode ? ' Light Mode' : ' Dark Mode'}
        </button>

        {/* main container where questions and answers */}
        <div className="main">
          {showResults ? (
            <div>
              {/* Display the score and result text */}
              <h1 className="score-h1">Your Score: {score}/{questions.length}</h1>
              <p className="result-text">
                {score < 3 ? 'Better Luck Next Time😓🤩' : 'Great Job! You Did It!🥳👏'}
              </p>

              {/* Button to play again */}
              <button className="again-btn" onClick={restartGame}>
                Play Again
              </button>
            </div>
          ) : (
            <>
              {/* Display question number */}
              <p className="no">Question: {currentQuestion + 1} out of {questions.length}</p>

              {/* Display the question text */}
              <h3 className={`para1 ${highlighted ? 'highlighted-text' : ''}`}>
                {questions[currentQuestion].text}
              </h3>

              {/* Display options */}
              <div className="options">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionClick(option.isCorrect)}
                  >
                    {option.text}
                  </button>
                ))}
              </div>

              {/* Footer with highlighting buttons */}
              <div className="footer">
                <button
                  className="remove-btn"
                  onClick={handleRemoveHighlightClick}
                >
                  Remove Highlight
                </button>
                <button className="add-btn" onClick={handleHighlightClick}>
                  Highlight
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Questions;
