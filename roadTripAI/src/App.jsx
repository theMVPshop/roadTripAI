import React, { useState, useEffect } from "react";
import "./styles/App.css"
import MenuBar from './components/MenuBar'
import MainMenu from "./components/MainMenu";
import LoadingSpinner from "./components/LoadingSpinner";
import LeafletMap from "./components/LeafletMap";

function App() {


  const [submit, setSubmit] =useState(false);
  const [itinerary, setItinerary] = useState([]);
  const [error, setError] = useState(null);


  return (
    <>
      <MenuBar />
      <MainMenu 
        itinerary={itinerary} 
        setItinerary={setItinerary}
        setError={setError}
        submit={submit}
        setSubmit={setSubmit}
      />
      {error && <p>Error: {error}</p>}
      {submit ? <LoadingSpinner /> : null}
      <LeafletMap 
        itinerary={itinerary}
      />
    </>
  );
}

export default App;
