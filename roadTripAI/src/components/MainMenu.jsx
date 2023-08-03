import React, { useState, useEffect, useRef } from "react";
import PlacesAutoComplete from "./PlacesAutocomplete";
import DatePicker from "react-date-picker";
import "react-calendar/dist/Calendar.css";
import Itinerary from "./Itinerary";
import LeafletMap from "./LeafletMap";
import LoadingSpinner from "./LoadingSpinner";
import { GetLatLng } from "./GetLatLng";
import { fetchPhotos } from "./GetPhotos";

const secretKey = import.meta.env.VITE_SECRET_KEY;

export default function MainMenu({ submit, setSubmit, itinerary, setItinerary, error, setError}) {

  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [message, setMessage] = useState("")
  const [startLatLng, setStartLatLng] = useState(true)
  const [trueLatLng, setTrueLatLng] = useState(true)
  let abortController = useRef(new AbortController());

  // re-enables button and cancels fetch if user changes data
  useEffect(()=> {
    if(submit) {
      setSubmit(false)
      setTrueLatLng(true)
      setStartLatLng(true)
      setMessage("Looks like you changed one of your inputs. Click submit again when you're ready.")
      abortController.current.abort()
    }
    // callback function cancels fetch if when component unmounts
    return () => {
      abortController.current.abort();
    }
  }, [startLocation, startDate, endLocation, endDate])

  // This useEffect goes through the itinerary and replaces lat & lng with correct coordinates
  // ...assuming the first returned result is correct. 1% of the time, it isn't.
  useEffect(()=> {
    const fetchPromises = itinerary.map(stop => {
        return fetch(`https://geocode.maps.co/search?q=${stop.city}`)
          .then(response => response.json())
          .then(data => {
            const obj = {
              lat: data[0].lat,
              lng: data[0].lon,
            };
            return obj;
          })
          .catch(err => {
            setError("Oh no! Looks like we couldn't verify the coordinates for each city. Map markers might be a little off.")
          });
      });
    if (startLatLng && !trueLatLng && !submit) {
        Promise.all(fetchPromises)
        .then(arr => {
          let copy = itinerary
          for (let i = 0; i < copy.length; i++) {
            copy[i].lat = arr[i].lat
            copy[i].lng = arr[i].lng
          }
          setItinerary(copy)
          setTrueLatLng(true)
          setMessage("Here's your AI generated roadtrip!")
        });
    }      
}, [itinerary])
  
  const url = "https://api.openai.com/v1/chat/completions";
  const prompt = `I'm planning a roadtrip, leaving on ${startDate} from ${startLocation} and arriving on ${endDate} at ${endLocation}. I want to drive a fairly direct route. Make me an itinerary of interesting stops along the way. I want to go to one interesting place per day, and on the first day, the interesting place should not be in my starting city. Each interesting place should be at least 2 hours but no more than 8 hours away from the previous interesting place. Give me an array of objects, each object representing a day of the road trip. I want to know the date as YYYY-MM-DD (date), longitude (lng), latitude (lat), name of the stop (name), a description of the stop (desc), the city closest to the stop as 'city, state abbreviation' (city), the drive time from the previous stop as a decimal (time), and the average historical temperature for the stop on the date we will arrive (temp). Please do not provide any additional text outside of the array`;

  function formatDate(date) {
    // The current start dates are Date() objects, and we need to convert them to the dd-mm-yyyy format.
    const year = date.getFullYear(); // Get full year
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Get month with leading zero if necessary
    const day = String(date.getDate()).padStart(2, "0"); // Get day with leading zero if necessary

    return `${day}-${month}-${year}`; // Format the date as "dd-mm-yyyy"
  }

  const handleSubmit = () => {
    setSubmit(true);
    //reset itinerary to blank when new one is being fetched
    setItinerary([]);
    // sets reminder that lat/lng has not been verified
    setTrueLatLng(false)
    setStartLatLng(false)

    //clear any errors after new fetch made
    setError(null);

    setMessage("Calculating start and end points...");

    abortController.current = new AbortController();

    GetLatLng(startLocation, endLocation, abortController.current)
      .then((coordinates) => {
        setMessage("Discovering points of interest along the way...");
        setItinerary([
          {
            city: startLocation,
            desc: "Start here",
            lat: coordinates[0].lat,
            lng: coordinates[0].lng,
          },
          {
            city: endLocation,
            desc: "You've arrived!",
            lat: coordinates[1].lat,
            lng: coordinates[1].lng
        }])
        setStartLatLng(true)
        return fetchItinerary(coordinates) 
      }).catch((error) => {
        setError(error.toString())
        setMessage("Hmm... Looks like the AI is being finicky.  Try hitting submit again.")
        setSubmit(false)
      })
      .then((fetchedItinerary) => {
        return fetchPhotos(fetchedItinerary);
      })
      .then((updatedItinerary) => {
        setItinerary(updatedItinerary);
        setSubmit(false);
      })
      .catch((error) => {
        setError(error.toString());
      });
  };

  const fetchItinerary = async (coordinates) => {
   return fetch(url, {
      method: "POST",
      signal: abortController.current.signal,
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
              name: startLocation,
              city: startLocation,
              desc: "Start here",
              lat: coordinates[0].lat,
              lng: coordinates[0].lng,
            });

            //insert the ending location at the end of the itinerary
            parsedContent.push({
              name: endLocation,
              city: endLocation,
              desc: "You've Arrived!",
              lat: coordinates[1].lat,
              lng: coordinates[1].lng,
            });
            
            setItinerary(parsedContent);
            setMessage("Verifying location data...")
            setSubmit(false);
          }
        } catch (err) {
          setError(err.toString());
          setSubmit(false);
        }
        return parsedContent;
      })
      .catch((error) => {
        setError(error.toString());
        setSubmit(false);
      });
  };


  return (
    
    <div className="mainMenu"> 
    <div className="menuHeader">
    {/* <img className='logo' src={logo}/> */}
    <h1>Plan Your Next Road Trip</h1>
    {/* <h2>AI will show you stops along the way.</h2> */}
    </div>
      
     <LeafletMap 
        itinerary={itinerary}
        trueLatLng={trueLatLng} 
      />
      <Itinerary stops={itinerary} />
        <div className="locationContainer">
          
        <section>
          <h2>Depart</h2>
          <PlacesAutoComplete
            location={startLocation}
            setLocation={setStartLocation}
          />
        </section>

        <section>
          <h2>Arrive</h2>
          <PlacesAutoComplete
            location={endLocation}
            setLocation={setEndLocation}
          />
        </section>
       
          <section>
            <h2>Depart Date</h2>
            <DatePicker
            onChange={setStartDate} 
            value={startDate}
            />
          </section>

          <section>
            <h2>Arrive Date</h2>
            <DatePicker
            onChange={setEndDate} 
            value={endDate}/>
          </section>
        </div>
        <div className="subbut">
          <button className="submitButton" onClick={handleSubmit} disabled={submit}>Submit</button>        

      <LoadingSpinner message={message} submit={submit}/>
      {error && <p>Error: {error}</p>}

          </div>
  </div>
  );
}