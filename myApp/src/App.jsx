import React from "react";
import ItemsList from "./components/ItemsList";

function App() {
  return (
    <div className="App">
      <h1>MongoDB Data in React</h1>
      <ItemsList />
    </div>
  );
}

export default App;

// each child in a list must have a unique key
