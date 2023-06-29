import { useState } from "react";
import PlacesAutocomplete from "./components/PlacesAutocomplete";
import "./styles/App.css"

function App() {
  return (
    <main className="App">
      <h1>Road Trip AI</h1>
      <PlacesAutocomplete />
    </main>
  );
}

export default App;
