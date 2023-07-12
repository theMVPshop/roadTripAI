import { useState } from "react";
import 'leaflet/dist/leaflet.css'

import "./styles/App.css";

import MenuBar from './components/MenuBar'
import LeafletMap from "./components/LeafletMap";

function App() {
  return (
    <>
      <MenuBar />
      <MainMenu />
    </>
  );
}

export default App;
