import React, { useEffect, useState } from "react";
import LeafletMap from "./LeafletMap";
import LoadingSpinner from "./LoadingSpinner";


const secretKey = import.meta.env.VITE_SECRET_KEY;

const url = "https://api.openai.com/v1/chat/completions";


const GetItinerary = ({tripDetails, submitted, setSubmit}) => {
  const [itinerary, setItinerary] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(true)

  const {startLocation, endLocation, startDate, endDate} = tripDetails

  // const prompt =
  // `I'm planning a roadtrip, leaving on ${startDate} from ${startLocation} and arriving on ${endDate} at ${endLocation}. I want to drive a fairly direct route. Make me an itinerary of interesting stops along the way. I want to go to one interesting place per day, and on the first day, the interesting place should not be in my starting city. Each interesting place should be at least 2 hours but no more than 8 hours away from the previous interesting place. Give me an array of objects, each object representing a day of the road trip. I want to know the date as YYYY-MM-DD (date), longitude (lng), latitude (lat), name of the stop (name), a description of the stop (desc), the city closest to the stop as 'city, state abbreviation' (city), the drive time from the previous stop as a decimal (time), and the average historical temperature for the stop on the date we will arrive (temp). Please do not provide any additional text outside of the array`;

  const prompt = `I'm planning a road trip, leaving on ${startDate} from ${startLocation} and arriving on ${endDate} at ${endLocation}. I want to drive the most efficient route with minimal detours. Make me an itinerary of interesting stops along the way. Each interesting place should be within a reasonable driving distance from the previous stop (between 3 and 8 hours), and be located along the direct route. Give me an array of objects, each object representing a day of the road trip. I want to know the date as YYYY-MM-DD (date), longitude (lng), latitude (lat), name of the stop (name), a description of the stop (desc), the city closest to the stop as 'city, state abbreviation' (city), the drive time from the previous stop as a decimal (time), and the average historical temperature for the stop on the date we will arrive (temp). Please do not provide any additional text outside of the array.`


  const fetchItinerary = () => {
    //reset itinerary to blank when new one is being fetched
    setItinerary([]);

    //clear any errors after new fetch made
    setError(null);

    // render the LoadingSpinner while fetch call resolves
    setLoaded(false)

    fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant who responds only in JSON objects" },
          { role: "user", content: prompt },
        ],
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const parsedContent = JSON.parse(data.choices[0].message.content);
        setItinerary(parsedContent);

      })
      .catch((error) => {
        setError(error);
        console.error("Error:", error);
      }).then(()=>{
        setSubmit(false)
      })
      .finally(setLoaded(true))
  };

    // call fetchItinerary if submit button is clicked
    useEffect(()=> {
      if(submitted) {
        fetchItinerary()
      }
    }, [submitted, prompt])
  
  return (
    <div>
      {error && <p>Error: {error.message}</p>}
      {!loaded ? <LoadingSpinner /> : null }
      <LeafletMap itinerary={itinerary} />
    </div>
  );
};

export default GetItinerary;
