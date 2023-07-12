import { useState } from "react";

import "./styles/App.css";

import MenuBar from "./components/MenuBar";
import MainMenu from "./components/MainMenu";

function App() {
  return (
    <>
      <MenuBar />
      <MainMenu />
    </>
  );
}

export default App;
