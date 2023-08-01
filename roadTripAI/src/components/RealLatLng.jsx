import { useState, useEffect } from "react"

const RealLatLng = (props) => {
    const { itinerary } = props

    const [stops, setStops] = useState([])

    useEffect(()=> {
        console.log("Heloo!")
        console.log(itinerary)
        if (itinerary) {let arr = []
            itinerary.forEach((stop)=> {
                fetch(`https://geocode.maps.co/search?q=${stop.city}`)
                .then(response => response.json())
                .then(data => {
                    arr.push(data[0].lat)
                    })
                })
            setStops(arr)
            }
    }, [itinerary])

    return (
        <ul>
            <li>This is the lat of stops!</li>
            {stops.map((stop)=> {
                return (
                    <li>
                        {stop}
                    </li>
                )
            })}

        </ul>
    )
}

export default RealLatLng