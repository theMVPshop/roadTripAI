import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'

const LeafletMap = (props) => {

    // MapContainer takes a prop called center. This should be an array with 2 entries, a lat and lng.
    // Default is the geographic center of the US
    // Marker takes a prop called position, which is the same format as center
    // Popup has no props, just makes some text appear over a marker when clicked

    // Polyfill component draws a straight line between each stop on our roadtrip.
    // It takes in one prop, positions.
    // Second prop, pathOptions, is hard coded and only changes the color of the line.

    // sampleTrip is just here for testing. Delete later.
    const sampleTrip = [
      {
      "date": "2023-06-23",
      "lng": -76.6132,
      "lat": 39.2904,
      "name": "Gettysburg National Military Park",
      "desc": "Explore the battlefield and learn about the historic Civil War battle that took place in 1863.",
      "city": "Gettysburg, PA",
      "time": 0,
      "temp": 75
      },
      {
      "date": "2023-06-24",
      "lng": -77.0369,
      "lat": 38.9072,
      "name": "Washington, D.C.",
      "desc": "Visit the iconic landmarks like the White House, Lincoln Memorial, and the National Mall.",
      "city": "Washington, D.C.",
      "time": 2.5,
      "temp": 82
      },
      {
      "date": "2023-06-25",
      "lng": -82.4584,
      "lat": 35.047,
      "name": "Great Smoky Mountains National Park",
      "desc": "Experience the beauty of the most visited national park in the United States, known for its diverse wildlife and stunning landscapes.",
      "city": "Gatlinburg, TN",
      "time": 6,
      "temp": 72
      },
      {
      "date": "2023-06-26",
      "lng": -86.7816,
      "lat": 36.1627,
      "name": "Nashville, TN",
      "desc": "Immerse yourself in the country music scene and enjoy live performances in famous venues like the Grand Ole Opry.",
      "city": "Nashville, TN",
      "time": 4,
      "temp": 88
      },
      {
      "date": "2023-06-27",
      "lng": -90.0715,
      "lat": 29.9511,
      "name": "New Orleans, LA",
      "desc": "Experience the vibrant culture, delicious cuisine, and lively music scene that make New Orleans unique.",
      "city": "New Orleans, LA",
      "time": 7,
      "temp": 85
      },
      {
      "date": "2023-06-28",
      "lng": -94.5786,
      "lat": 39.0997,
      "name": "Kansas City, MO",
      "desc": "Explore the jazz and barbecue capital, and visit attractions like the National WWI Museum and the Nelson-Atkins Museum of Art.",
      "city": "Kansas City, MO",
      "time": 10,
      "temp": 90
      },
      {
      "date": "2023-06-29",
      "lng": -104.9903,
      "lat": 39.7392,
      "name": "Denver, CO",
      "desc": "Enjoy the outdoor activities and stunning landscapes of the Rocky Mountains, along with the vibrant urban scene in Denver.",
      "city": "Denver, CO",
      "time": 9,
      "temp": 77
      },
      {
      "date": "2023-06-30",
      "lng": -111.891,
      "lat": 40.7608,
      "name": "Salt Lake City, UT",
      "desc": "Visit the beautiful Salt Lake Temple and explore the nearby natural wonders like Great Salt Lake and Antelope Island.",
      "city": "Salt Lake City, UT",
      "time": 8,
      "temp": 85
      },
      {
      "date": "2023-07-01",
      "lng": -112.074,
      "lat": 36.094,
      "name": "Grand Canyon National Park",
      "desc": "Witness the breathtaking beauty of one of the world's most famous natural wonders, the Grand Canyon.",
      "city": "Grand Canyon Village, AZ",
      "time": 7,
      "temp": 92
      },
      {
      "date": "2023-07-02",
      "lng": -115.172,
      "lat": 36.1146,
      "name": "Las Vegas, NV",
      "desc": "Experience the glitz and glamour of the famous Las Vegas Strip, with its world-class casinos, shows, and entertainment.",
      "city": "Las Vegas, NV",
      "time": 5,
      "temp": 107
      },
      {
      "date": "2023-07-03",
      "lng": -118.2437,
      "lat": 34.0522,
      "name": "Los Angeles, CA",
      "desc": "Reach the final destination of your road trip and explore the many attractions of the entertainment capital of the world.",
      "city": "Los Angeles, CA",
      "time": 5,
      "temp": 85
      }
      ]
    // lineOfTravel will map over the array of trips to create an array to pass to Polyfill as positions prop.
    // >>>> Needs to be made with useState, so that the component will re-render when data changes, with useEffect call.
    const lineOfTravel = sampleTrip.map((stop) => {
      return [stop.lat, stop.lng]
    })

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
      <MapContainer center={[39.833333, -95.68]} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* The following map() returns a marker for every stop, with a
        Popup showing the name and description.
        sampleTrip will need to be changed to the state array */}
        {sampleTrip.map((stop) => {
          return (
            <Marker position={[stop.lat, stop.lng]}>
              <Popup>
                {stop.city} <br />
                {stop.desc}
              </Popup>
            </Marker>
          )
        })}
        <Polyline pathOptions={{ color: 'lime'} } positions={lineOfTravel} />

      </MapContainer>
    )
}

export default LeafletMap