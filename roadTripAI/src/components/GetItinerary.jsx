import React, { useEffect, useState } from "react";
import LeafletMap from "./LeafletMap";
import LoadingSpinner from "./LoadingSpinner";

import { GetLatLng } from "./GetLatLng";

const secretKey = import.meta.env.VITE_SECRET_KEY;

const url = "https://api.openai.com/v1/chat/completions";

const GetItinerary = ({ submitted, setSubmit, itinerary, setItinerary, error, setError }) => {
  const [loaded, setLoaded] = useState(true);



  useEffect(() => {
    setLoaded(!submitted)
  }, [submitted]);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {/* todo: In refactoring fetch request, did not refactor error */}
      {!loaded ? <LoadingSpinner /> : null}
      <LeafletMap itinerary={itinerary} />
    </div>
  );
};

export default GetItinerary;
