import React, { useState } from "react";
import PlacesAutoComplete from "./PlacesAutocomplete";
import "../styles/MainMenu.css";

export default function MainMenu() {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  return (
    <div className="mainMenu">
      <div className="mainMenuInputContainer ">
        <section className="startLocationContainer inputContainer">
          <h2 className="startLocationTitle">Start Location:</h2>
          <PlacesAutoComplete
            className="startLocationInput"
            location={startLocation}
            setLocation={setStartLocation}
          />
        </section>

        <section className="startDateContainer inputContainer">
          <h2 className="startDateTitle">Start Date:</h2>
          <PlacesAutoComplete
            className="startLocationInput"
            location={startLocation}
            setLocation={setStartLocation}
          />
        </section>

        <section className="endLocationContainer inputContainer">
          <h2 className="endLocationTitle">End Location:</h2>
          <PlacesAutoComplete
            className="endLocationInput"
            location={endLocation}
            setLocation={setEndLocation}
          />
        </section>

        <section className="endDateContainer inputContainer">
          <h2 className="endDateTitle">Start Location:</h2>
          <PlacesAutoComplete
            className="startLocationInput"
            location={startLocation}
            setLocation={setStartLocation}
          />
        </section>

        <button className="mainMenuSubmitButton">Submit</button>
      </div>
    </div>
  );
}