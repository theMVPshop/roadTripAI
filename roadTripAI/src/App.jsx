import { useState } from "react";
import "./styles/App.css"
import MenuBar from './components/MenuBar'
import GetItinerary from "./components/GetItinerary";

function App() {
  return (
    <>
      <MenuBar />
      <MainMenu />
    </>
  );
}

export default App;
