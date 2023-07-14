import React, { useState } from "react";
import PlacesAutoComplete from "./PlacesAutocomplete";
import DatePicker from 'react-date-picker'
import "../styles/MainMenu.css";
import 'react-date-picker/dist/DatePicker.css'; // Default styling for DatePicker
import 'react-calendar/dist/Calendar.css';

export default function MainMenu() {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  function formatDate(date) {
    // The current start dates are Date() objects, and we need to convert them to the dd-mm-yyyy format.
    const year = date.getFullYear(); // Get full year
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month with leading zero if necessary
    const day = String(date.getDate()).padStart(2, '0'); // Get day with leading zero if necessary
  
    return `${day}-${month}-${year}`; // Format the date as "dd-mm-yyyy"
  }

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
          <DatePicker onChange={setStartDate} value={startDate}/>
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
          <DatePicker onChange={setEndDate} value={endDate}/>
        </section>

        <button className="mainMenuSubmitButton">Submit</button>
      </div>
    </div>
  );
}
