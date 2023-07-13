import { useState } from "react";
import "./styles/App.css"
import MenuBar from './components/MenuBar'
import MainMenu from "./components/MainMenu";
import LeafletMap from "./components/LeafletMap";
import GetItinerary from "./components/GetItinerary";

function App() {
  return (
    <>
    <MenuBar />
     <h1>Road Trip AI</h1>
     <h2>Bottom Text</h2>
     <LeafletMap />
     <GetItinerary />
      <MenuBar />
      <MainMenu />
    </>
  );
}

export default App;
