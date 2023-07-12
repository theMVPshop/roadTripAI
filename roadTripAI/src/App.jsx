import { useState } from "react";

import "./styles/App.css"

import Input from './components/Input'
import MenuBar from './components/MenuBar'

function App() {
  return (
    <div className="App">
    <MenuBar />
    <Input/>
    </div>
  )
}

export default App;
