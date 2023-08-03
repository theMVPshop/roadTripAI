import { useState, useEffect } from "react"

const RealLatLng = (props) => {
    const { itinerary } = props

    const [stops, setStops] = useState([])

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
              .catch(err => console.log(err));
          });
        if (itinerary) {
            Promise.all(fetchPromises)
            .then(arr => {
              setStops(arr);
            });
        }      
    }, [itinerary])

    return (
        <ul>
            <li>This is the lat of stops!</li>
            {stops.map((stop)=> {
                return (
                    <li>
                        {stop.lat}
                    </li>
                )
            })}

        </ul>
    )
}

export default RealLatLng