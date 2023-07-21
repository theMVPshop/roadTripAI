import React, { useState, useEffect } from "react";
import PlacesAutoComplete from "./PlacesAutocomplete";
import DatePicker from 'react-date-picker'
import 'react-calendar/dist/Calendar.css';
import Itinerary from "./Itinerary";
const secretKey = import.meta.env.VITE_SECRET_KEY;

export default function MainMenu({onSubmit, submit, setSubmit, itinerary, setItinerary, error, setError}) {
  // test comment
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const abortController = new AbortController();

  // re-enables button and cancels fetch if user changes data
  useEffect(()=> {
    if(submit) {
      setSubmit(false)
      abortController.abort()
    }
    
    return () => {
      abortController.abort();
    }
  }, [startLocation, startDate, endLocation, endDate])
  
  const url = "https://api.openai.com/v1/chat/completions";
  const prompt = `I'm planning a roadtrip, leaving on ${startDate} from ${startLocation} and arriving on ${endDate} at ${endLocation}. I want to drive a fairly direct route. Make me an itinerary of interesting stops along the way. I want to go to one interesting place per day, and on the first day, the interesting place should not be in my starting city. Each interesting place should be at least 2 hours but no more than 8 hours away from the previous interesting place. Give me an array of objects, each object representing a day of the road trip. I want to know the date as YYYY-MM-DD (date), longitude (lng), latitude (lat), name of the stop (name), a description of the stop (desc), the city closest to the stop as 'city, state abbreviation' (city), the drive time from the previous stop as a decimal (time), and the average historical temperature for the stop on the date we will arrive (temp). Please do not provide any additional text outside of the array`;
  

  function formatDate(date) {
    // The current start dates are Date() objects, and we need to convert them to the dd-mm-yyyy format.
    const year = date.getFullYear(); // Get full year
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month with leading zero if necessary
    const day = String(date.getDate()).padStart(2, '0'); // Get day with leading zero if necessary
  
    return `${day}-${month}-${year}`; // Format the date as "dd-mm-yyyy"
  }

  const handleSubmit = () => {
    setSubmit(true)
    //reset itinerary to blank when new one is being fetched
    setItinerary([]);

    //clear any errors after new fetch made
    setError(null);
    
    fetchItinerary()

  }

  const fetchItinerary = async () => {

    fetch(url, {
      method: "POST",
      signal: abortController.signal,
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant who responds only in JSON objects",
          },
          { role: "user", content: prompt },
        ],
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let parsedContent;

        try {
          //set parsed content to the parsed data
          parsedContent = JSON.parse(data.choices[0].message.content);

          //if API returns an object with a nexted array, then access the only key-value pair, which should be the array
          if (!Array.isArray(parsedContent) && parsedContent !== undefined) {
            parsedContent = Object.values(parsedContent)[0];
          }

          // Insert the starting location at the start of the itinerary
          if (parsedContent !== undefined) {
            parsedContent.unshift({
              city: startLocation,
              desc: "Start here",
              //TODO: change to actual lat/lng of start location with google maps PlacesService and getDetails() method
              lat: 30.0866,
              lng: -94.9027,
            });

            setItinerary(parsedContent);
            setSubmit(false);
          }
        } catch (err) {
          setError(err.toString());
          setSubmit(false);
        }
      })
      .catch((error) => {
        setError(error.toString());
        setSubmit(false);
      });
  };

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
          <DatePicker
          className="startLocationInput"
          onChange={setStartDate} 
          value={startDate}
          />
        </section>

        <section className="endLocationContainer inputContainer">
          <h2 className="startLocationTitle">End Location:</h2>
          <PlacesAutoComplete
            className="endLocationInput"
            location={endLocation}
            setLocation={setEndLocation}
          />
        </section>

        <section className="endDateContainer inputContainer">
          <h2 className="startLocationTitle">End Date:</h2>
          <DatePicker onChange={setEndDate} value={endDate}/>
        </section>

        <button className="mainMenuSubmitButton" onClick={handleSubmit} disabled={submit}>Submit</button>
      </div>
      {/* <Itinerary /> */}
    </div>
  );
}
