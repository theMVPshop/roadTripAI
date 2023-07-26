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
  const [loaded, setLoaded] = useState(true);

  //send this function as a prop to MainMenu to collect user inputs
  const handleMainMenuSubmit = (tripDetails) => {
    setUserInputs(tripDetails)
    setSubmit(true)
  }

  useEffect(() => {
    setLoaded(!submit);
  }, [submit]);

  return (
    <>

      <MenuBar />
      <MainMenu 
        onSubmit={handleMainMenuSubmit} 
        itinerary={itinerary} 
        setItinerary={setItinerary}
        error={error}
        setError={setError}
        submit={submit}
        setSubmit={setSubmit}
      />
      {error && <p>Error: {error}</p>}
      {!loaded ? <LoadingSpinner /> : null}
      <LeafletMap 
        itinerary={itinerary}
      />
    </>
  );
}

export default App;
