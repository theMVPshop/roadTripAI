import React, { useEffect, useState } from "react";
import LeafletMap from "./LeafletMap";
const secretKey = import.meta.env.VITE_SECRET_KEY;


const prompt =  "I'm planning a roadtrip, leaving on August 8 from Austin and arriving on August 15 at New York City.  I am driving a fairly direct route.  Make me an itinerary of interesting stops along the way. I want to go to one interesting place per day, and on the first day, the interesting place should not be in my starting city. Each interesting place should be at least 2 hours but no more than 8 hours away from the previous interesting place.  Give me an array of objects, each object representing a day of the road trip. I want to know the date as YYYY-MM-DD (date), longitude (lng), latitude (lat), name of the stop (name), a description of the stop (desc), the city closest to the stop as 'city, state abbreviation' (city), the drive time from the previous stop as a decimal (time), and the average historical temperature for the stop on the date we will arrive (temp). Please do not provide any additional text outside of the array"

const GetItinerary = () => {
  const [itinerary, setItinerary] = useState([]);

  const fetchItinerary = () => {
    const url = "https://api.openai.com/v1/chat/completions";
    fetch(url, {
      method: "POST",
      headers: {
        Authorization:
          secretKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: prompt },
        ],
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const parsedContent = JSON.parse(data.choices[0].message.content)
   
        setItinerary(parsedContent)
   
      console.log( itinerary)
      });
  };

  useEffect(() => {
    fetchItinerary();
  }, [itinerary]);

  return (
    <div>
      <LeafletMap itineraryData={itinerary} />

    </div>
  );
};

export default GetItinerary;
