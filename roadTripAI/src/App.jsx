import { useState } from "react";
import "./styles/App.css"
import MenuBar from './components/MenuBar'
import GetItinerary from "./components/GetItinerary";

function App() {
  return (
    <>
    <MenuBar />
     <h1>Road Trip AI</h1>
     <h2>Bottom Text</h2>
     <GetItinerary></GetItinerary>
    </>
  )
}

export default App;
