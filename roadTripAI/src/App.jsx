import { useState } from "react";
import 'leaflet/dist/leaflet.css'

import "./styles/App.css";

import Input from './components/Input'
import MenuBar from './components/MenuBar'
import LeafletMap from "./components/LeafletMap";

function App() {
  return (
    <div className="App">
    <MenuBar />
    <Input/>
    <Results/>
    </div>
  )
}

export default App;
