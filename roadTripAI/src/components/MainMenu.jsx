import React, { useState } from "react";
import PlacesAutoComplete from "./PlacesAutocomplete";
import "../styles/MainMenu.css";

export default function MainMenu() {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  return (
    <div className="mainMenu">
      <PlacesAutoComplete
        location={startLocation}
        setLocation={setStartLocation}
      />
    </div>
  );
}
