import { useState } from "react";
import 'leaflet/dist/leaflet.css'

import "./styles/App.css"

import MenuBar from './components/MenuBar'
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
    </>
  )
}

export default App;
