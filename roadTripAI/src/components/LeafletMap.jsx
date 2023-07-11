

const LeafletMap = (props) => {
    var map = L.map('map').setView([51.505, -0.09], 13);

    return (
        
        <div>
            Leaflet Map:
            <div id="map" style={{ height: "180px"}}></div>
        </div>
    )
}

export default LeafletMap