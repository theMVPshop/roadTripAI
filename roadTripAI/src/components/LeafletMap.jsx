import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

const LeafletMap = (props) => {

    // MapContainer takes a prop called center. This should be an array with 2 entries, a lat and lng.
    // Marker takes a prop called position, which is the same format as center
    // Popup has no props, just makes some text appear over a marker when clicked
    // Final product will look something like this:
    
    // {itenary.map(day => {
    //     return (
    //         <Marker position={[lat, lng]}>
    //             <Popup>
    //                 {day.name} or some other description
    //             </Popup>
    //         </Marker>
    //     )
    // })}


    return (
<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    )
}

export default LeafletMap