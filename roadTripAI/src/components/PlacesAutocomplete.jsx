import React, { useState } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import "../styles/PlacesAutocomplete.css";

const PlacesAutocomplete = ({ google, ...props}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [predictions, setPredictions] = useState([]);
  // const [location, setLocation] = useState("");
  const { location, setLocation } = props;

  const handleSetLocation = (event) => {
    const tempLocation = event.target.innerText;
    setLocation(tempLocation);
    console.log("setlocation")
    setPredictions([]);
    setSearchTerm(tempLocation);
  };

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;

    setSearchTerm(searchTerm);

    if (searchTerm.length > 0) {
      const service = new google.maps.places.AutocompleteService();
      const request = {
        input: searchTerm,
      };

      service.getPlacePredictions(request, (predictions, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          setPredictions(predictions);
        }
      });
    } else {
      setPredictions([]);
    }
  };

  return (
    <div className="placesAutoComplete">
      <input
        type="text"
        className="prediction-input"
        placeholder="Enter a location"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <ul className="prediction-list">
        {predictions.map((prediction) => (
          <li
            className="prediction"
            onClick={handleSetLocation}
            key={prediction.place_id}
          >
            {prediction.description.slice(0, 50)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDSHl4h3Z6g8dhecKE0114Xv9c-UXs4Xoo",
})(PlacesAutocomplete);
