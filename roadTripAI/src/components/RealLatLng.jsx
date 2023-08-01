import { useState, useEffect } from "react"

const RealLatLng = (props) => {
    const { itinerary } = props

    const [stops, setStops] = useState([])

    useEffect(()=> {
        const fetchPromises = itinerary.map(stop => {
            return fetch(`https://geocode.maps.co/search?q=${stop.city}`)
              .then(response => response.json())
              .then(data => {
                console.log(`data for ${stop}:`);
                const obj = {
                  lat: data[0].lat,
                  lng: data[0].lon,
                };
                console.log(obj);
                return obj;
              })
              .catch(err => console.log(err));
          });
        if (itinerary) {
            Promise.all(fetchPromises)
            .then(arr => {
              console.log(arr);
              setStops(arr);
            });
        }      
    }, [itinerary])

    return (
        <ul>
            <li>This is the lat of stops!</li>
            {stops.map((stop)=> {
                console.log(stop)
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