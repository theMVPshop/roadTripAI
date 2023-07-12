import React, { useState } from "react";
import PlacesAutoComplete from "./PlacesAutocomplete";
import "../styles/MainMenu.css";

export default function MainMenu() {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  return (
    <div className="mainMenu">
      <section className="startLocationContainer">
        <h2 className="startLocationTitle">Start Location:</h2>
        <PlacesAutoComplete
          className="startLocationInput"
          location={startLocation}
          setLocation={setStartLocation}
        />
      </section>
      <section className="startLocationContainer">
        <h2 className="startLocationTitle">End Location:</h2>
        <PlacesAutoComplete
        className="endLocationInput"
        location={endLocation}
        setLocation={setEndLocation}
      />
      </section>
      <button className="mainMenuSubmitButton">Submit</button>
    </div>
  );
}
