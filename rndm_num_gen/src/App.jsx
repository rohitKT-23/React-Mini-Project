import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [message, setMessage] = useState('');

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 10) + 1; // Generates a number between 1-10
    setRandomNumber(number);

    if (number === 7) {
      setMessage('🎉 Player Wins! 🎉');
    } else {
      setMessage('Try Again! 😢');
    }
  };

  return (
    <div className="App">
      <h1>Random Number Generator</h1>
      <p className="number-display">
        {randomNumber !== null ? `Generated Number: ${randomNumber}` : 'Click the button to generate a number'}
      </p>
      <button onClick={generateRandomNumber}>Generate Number</button>
      {message && <p className="result-message">{message}</p>}
    </div>
  );
};

export default App;
