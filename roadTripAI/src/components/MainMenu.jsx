import React, { useState } from "react";
import PlacesAutoComplete from "./PlacesAutocomplete";
import DatePicker from 'react-date-picker'
import 'react-calendar/dist/Calendar.css';
import Itinerary from "./Itinerary";

export default function MainMenu({onSubmit}) {
  // test comment
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

  const handleSubmit = () => {
  
    //onSubmit is a prop from parent (app.jsx) that collects user details to be able to use in GetItinerary
    onSubmit({startLocation, endLocation, startDate, endDate})

  }

  return (
    <div className="mainMenu">        
        <div className="locationContainer">
        <section>
          <h2>Start Location:</h2>
          <PlacesAutoComplete
            location={startLocation}
            setLocation={setStartLocation}
          />
        </section>

        <section>
          <h2>End Location:</h2>
          <PlacesAutoComplete
            location={endLocation}
            setLocation={setEndLocation}
          />
        </section>
        </div>
        

        <div className="dateContainer">
          <section>
            <h2>Start Date:</h2>
            <DatePicker
            onChange={setStartDate} 
            value={startDate}
            />
          </section>

          <section>
            <h2>End Date:</h2>
            <DatePicker
            onChange={setEndDate} 
            value={endDate}/>
          </section>

        </div>
          <button className="submitButton" onClick={handleSubmit}>Submit</button>        
          {/* <Itinerary /> */}
    </div>
  );
}
