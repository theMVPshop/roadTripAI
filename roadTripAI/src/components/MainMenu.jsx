import React, { useState } from "react";
import PlacesAutoComplete from "./PlacesAutocomplete";
import "../styles/MainMenu.css";

export default function MainMenu() {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [results, setResults] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    //Display the results//
    setResults(`Start:${startLocation} End:${endLocation}`);

    setStartLocation('');
    setEndLocation('');
  }

  return (
    <div className="mainMenu">
      <form onSubmit={onSubmit}>
        <div className="mainMenuInputContainer">
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
            <h2 className="endDateTitle">End Date:</h2>
            <PlacesAutoComplete
              className="startLocationInput"
              location={startLocation}
              setLocation={setStartLocation}
            />
          </section>
        </div>
      </form>
      <div className="mainMenuInputContainer">
        <form onSubmit={onSubmit}>
        <h2 className="startLocationTitle">Start Location:</h2>
          <input
            type="text"
            value={startLocation}
            onInput={(e) => setStartLocation(e.target.value)}
            placeholder="start location"
            className="startLocationInput"
          />
        <h2 className="endLocationTitle">End Location:</h2>
          <input
            type="text"
            value={endLocation}
            onInput={(e) => setEndLocation(e.target.value)}
            placeholder="end location"
            className="startLocationInput"
          />
          <input type="submit" />
        </form>
        <div>
          <h1>{results}</h1>
        </div>
      </div>
    </div>
  );
}