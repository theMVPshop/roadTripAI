import React, { useEffect, useState } from "react";
import LeafletMap from "./LeafletMap";
import LoadingSpinner from "./LoadingSpinner";

const secretKey = import.meta.env.VITE_SECRET_KEY;

const url = "https://api.openai.com/v1/chat/completions";

const GetItinerary = ({ submitted, itinerary, error }) => {



  // make the LoadingSpinner appear when submitted


  return (
    <div>
      
      {/* todo: In refactoring fetch request, did not refactor error */}
      
      <LeafletMap itinerary={itinerary} />
    </div>
  );
};

export default GetItinerary;
