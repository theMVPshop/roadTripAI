import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import {useState, useEffect} from 'react';

const LeafletMap = ({itinerary}) => {

    // MapContainer takes a prop called center. This should be an array with 2 entries, a lat and lng.
    // Default is the geographic center of the US
    // Marker takes a prop called position, which is the same format as center
    // Popup has no props, just makes some text appear over a marker when clicked

    // Polyfill component draws a straight line between each stop on our roadtrip.
    // It takes in one prop, positions.
    // Second prop, pathOptions, is hard coded and only changes the color of the line.
   
    // lineOfTravel will map over the array of trips to create an array to pass to Polyfill as positions prop.
    // >>>> Needs to be made with useState, so that the component will re-render when data changes, with useEffect call.
    // const lineOfTravel = sampleTrip.map((stop) => {
    //   return [stop.lat, stop.lng]
    // })
    const [lineOfTravel, setLineOfTravel]= useState([]);
    
    useEffect(()=> {
     if( itinerary && itinerary.length ) {
      setLineOfTravel(itinerary.map(stop => [stop.lat, stop.lng]));
      console.log(itinerary)
     }
    //  else setLineOfTravel[], so the line will disappear
    }, [itinerary])

    // The following code changes the default zoom of the MapContainer
    // depending on the size of the user's screen
    let zoom = 4
    function changeZoom(x) {
      if (x.matches) { 
        zoom = 3
      } 
    }
    let q = window.matchMedia("(max-width: 649px)")
    changeZoom(q)


    return (
      <div className='mapWrapper'>
      <MapContainer center={[39.833333, -95.68]} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* The following map() returns a marker for every stop, with a
        Popup showing the name and description.
        sampleTrip will need to be changed to the state array */}
        {itinerary && itinerary.length >0 && itinerary.map((stop, index) => {
          return (
            <Marker key={index} position={[stop.lat, stop.lng]}>
              <Popup>
                {stop.city} <br />
                {stop.desc}
              </Popup>
            </Marker>
          )
        })}
        <Polyline pathOptions={{ color: 'lime'} } positions={lineOfTravel} />

      </MapContainer>
      </div>
    )
}

export default LeafletMap
