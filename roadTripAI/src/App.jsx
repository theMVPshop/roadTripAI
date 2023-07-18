import { useState } from "react";
import "./styles/App.css"
import MenuBar from './components/MenuBar'
import MainMenu from "./components/MainMenu";
import LeafletMap from "./components/LeafletMap";
import GetItinerary from "./components/GetItinerary";

function App() {

  //save user inputs from main menu so that they can be sent to GetItinerary
  const [userInputs, setUserInputs] =useState({});
  const [submit, setSubmit] =useState(false)

  //send this function as a prop to MainMenu to collect user inputs
  const handleMainMenuSubmit = (tripDetails) => {
    setUserInputs(tripDetails)
    setSubmit(true)

  }

  return (
    <>
    <MenuBar />
     <h1>Road Trip AI</h1>
     <h2>Bottom Text</h2>
     <LeafletMap />
     <GetItinerary  tripDetails={userInputs} submitted={submit} setSubmit={setSubmit}/>
      <MenuBar />
      <MainMenu onSubmit={handleMainMenuSubmit} />
      <LeafletMap />
    </>
  );
}

export default App;
