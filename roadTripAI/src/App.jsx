import React, { useState } from "react";
import "./styles/App.css"
import MenuBar from './components/MenuBar'
import MainMenu from "./components/MainMenu";
import LeafletMap from "./components/LeafletMap";

function App() {


  const [submit, setSubmit] =useState(false);
  const [itinerary, setItinerary] = useState([]);
  const [error, setError] = useState(null);

  //send this function as a prop to MainMenu to collect user inputs
  const handleMainMenuSubmit = (tripDetails) => {
    setUserInputs(tripDetails)
    setSubmit(true)
  }

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
    
      <LeafletMap itinerary={itinerary} setItinerary={setItinerary}/>

    </>
  );
}

export default App;
