import React, { useEffect, useState } from "react";
import LeafletMap from "./LeafletMap";
import LoadingSpinner from "./LoadingSpinner";

const secretKey = import.meta.env.VITE_SECRET_KEY;

const url = "https://api.openai.com/v1/chat/completions";

const GetItinerary = ({ submitted, itinerary, error }) => {
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
