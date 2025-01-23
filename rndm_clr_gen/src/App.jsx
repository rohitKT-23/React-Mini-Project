import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [bgColor, setBgColor] = useState('#ffffff'); // Default color white

  // Function to generate random color
  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBgColor(randomColor);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <h1>Random Color Generator</h1>
      <p>Current Color: {bgColor}</p>
      <button onClick={generateRandomColor}>Generate Color</button>
    </div>
  );
};

export default App;
